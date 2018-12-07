import * as Faker from 'faker'

// import { server } from '../src/server'
require ('../src/server');
import { IUserModel, IUser, User } from '../src/app/model/user.model';
import { IAsset, IAssetModel, Asset } from '../src/app/model/asset.model';
import { IPhoto, Photo, IPhotoModel } from '../src/app/model/photo.model';
var mongoose = require('mongoose')


setTimeout( async () => {
    let seed:Seed = new Seed()
    await seed.dropDatabase();
    await seed.execute();

}, 5000)


class Seed {
    constructor(){
        this.init()
    }

    private imageList:Array<any>
    private server:string
    private imagePath:string

    init(){

        this.server = 'http://127.0.0.1:8080';
        this.imagePath = 'http://127.0.0.1:8080/file/property';

        this.imageList = [];

        for(let i:number = 1; i<=10; i++){
            let pList:Array<any> = [];
            for(let j:number = 1; j<= 9; j++){
                let url = this.imagePath + '/' + 'p' + i.toString() + '-0' + j.toString() + '.jpg';
                pList.push({
                    url: url,
                    uthumbnailUrll: url,
                    originalUrl: url,
                    altText: '',
                    title: '',
                })
            }
            this.imageList.push(pList)
        }

    }

    async dropDatabase(){
        await mongoose.connection.db.dropDatabase();
    }

    async createAdmin(){
        let payload:IUser = {}
        payload.role = 2
        payload.password = 'allowme'
        payload.firstName = 'Prasad'
        payload.lastName = 'Sivanandan'
        payload.email = 'chazeprasad@gmail.com';
        payload.username = payload.email
        payload.isActive = true
        payload.phone = '+919542685141'
        payload.homePhone = '+919542685141'
        payload.address = Faker.address.streetAddress()
        payload.city = Faker.address.city()
        payload.state = Faker.address.state()
        payload.zip = parseInt(Faker.address.zipCode())

       let prasad = await  User.create(payload)

        payload = {}
        payload.role = 2
        payload.password = 'allowme'
        payload.firstName = 'Dave'
        payload.lastName = 'Bonitati'
        payload.email = 'dbonitati@gmail.com';
        payload.username = payload.email
        payload.isActive = true
        payload.phone = '+919542685141'
        payload.homePhone = '+919542685141'
        payload.address = Faker.address.streetAddress()
        payload.city = Faker.address.city()
        payload.state = Faker.address.state()
        payload.zip = parseInt(Faker.address.zipCode())

        let dave = await User.create(payload)
    }

     async createUser(){
        let payload:IUser = {}
        payload.password = 'allowme'
        payload.firstName = Faker.name.firstName()
        payload.lastName = Faker.name.firstName()
        payload.email = Faker.internet.email(payload.firstName, payload.lastName,'xyc');
        payload.username = payload.email
        payload.isActive = true
        payload.phone = '+919542685141'
        payload.homePhone = '+919542685141'
        payload.address = Faker.address.streetAddress()
        payload.city = Faker.address.city()
        payload.state = Faker.address.state()
        payload.zip = parseInt(Faker.address.zipCode())
        
        let user:IUserModel = await User.create(payload)

        await this.createAsset(user)

        return user;
    }
    async createAsset(owner:IUserModel){
        let payload:IAsset = {}
        payload.owner = owner._id;
        payload.isActive = true;
        payload.description = Faker.lorem.paragraph(5);
        payload.houseNo = Faker.random.number({min:1111, max:99999}).toString();
        payload.address = Faker.address.streetAddress();
        payload.city = "Toledo"
        payload.state = "OH"
        payload.zip = Faker.random.number({min:43601, max:43699});
        payload.lat = parseFloat(Faker.address.latitude());
        payload.lng = parseFloat(Faker.address.longitude());
        payload.numBedrooms = Faker.random.number({min:2, max:5});
        payload.numBathrooms = 2;
        payload.yearBuilt = Faker.random.number({min:1980, max:2017})
        payload.squareFootage = Faker.random.number({min:1200, max:4100})
        payload.occupancyStatus = 'Ready to move';
        payload.lotSize = 0.26;
        payload.exteriorDetails = Faker.lorem.paragraph(2);
        payload.foundationDetails = Faker.lorem.paragraph(2);
        payload.roofDetails = Faker.lorem.paragraph(2);
        payload.lotDetails = Faker.lorem.paragraph(2);
        payload.garageDetails = Faker.lorem.paragraph(2);
        payload.parkingDetails = Faker.lorem.paragraph(2);

        let asset:IAssetModel = await Asset.create(payload);
        owner.assets.push(asset._id);
        await owner.save();

        await this.createPhoto(asset);

        return asset;
    }

    async createPhoto(asset:IAssetModel){
        let n = this.randomRange(1,9) - 1;
        let list = this.imageList[n];
        for(let i:number=0; i<9; i++){
            let payload:IPhoto = list[i];
            payload.asset = asset._id;
            let photo:IPhotoModel = await Photo.create(payload)
            asset.photos.push(photo._id)
            await asset.save();
        }
    }

    async execute(){
        await this.createAdmin();
        const userCount:number = 20;
        for( let i:number = 0; i< userCount; i++) {
            await this.createUser();
        }
    }
    randomRange(min,max): number // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}