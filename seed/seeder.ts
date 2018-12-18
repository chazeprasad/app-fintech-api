import mongoose = require("mongoose");
import * as Faker from 'faker'

import { IUserModel, IUser, User } from '../src/app/model/user.model';
import { IBank, IBankModel, Bank } from '../src/app/model/bank.model';
import { IAccount, IAccountModel, Account } from '../src/app/model/account.model';
import { IActivity, IActivityModel, Activity } from '../src/app/model/activity.model';
import { IPayment, IPaymentModel, Payment } from '../src/app/model/payment.model';


export class Seeder {

    private imageList:Array<any>
    private domain:string
    private imagePath:string

    constructor(){
       
    }
    init(){
        this.domain = process.env.DOMAIN ||  '';
        this.initMongoose()
    }

    async initMongoose() {
        const DB_URL = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/fintech_development';
        console.log('=== DB_URL ===')
        console.log(DB_URL)
        //use q promises
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        mongoose.connect(DB_URL, { useNewUrlParser: true }).then(
            async () => { 
                await this.dropDatabase();
                await this.seed();
                process.exit(0);
             },
            err => { console.log(err.message) }
        );
    }

    async dropDatabase(){
        await mongoose.connection.db.dropDatabase();
    }

     async createUser(){
        let payload:IUser = {}
        payload.role = 1
        payload.password = 'allowme'
        payload.firstName = 'Prasad'
        payload.lastName = 'Sivanadan'
        payload.email = 'prasad@abc.com';
        payload.username = payload.email
        
        let user:IUserModel = await User.create(payload)

        await this.createBanks(user, 10)

        return user;
    }
    async createBanks(user:IUserModel, count=10) {

        let payload:IBank;
        let bank:IBankModel

        for(let i=0; i < count; i++){
            payload = {}
            payload.bankName = Faker.company.companyName() + ' BANK';
            bank = await Bank.create(payload)
          
            await this.createAccounts(bank, user)
        }

    }

    async createAccounts(bank:IBankModel, user:IUserModel) {
        let count:number = this.randomRange(2,6);
        let payload:IAccount;
        let account:IAccountModel
        let currecyCodes = ['EUR', 'USD', 'GBP']

        for(let i=0; i < count; i++){
            payload = {}
            payload.bank = bank._id
            payload.user = user._id
            payload.accountNo = Faker.finance.account();
            payload.balance = this.randomRange(10000, 110000);
            payload.currency = currecyCodes[this.randomRange(1,3)-1]

            account = await Account.create(payload);

            bank.accounts.push(account);
            await bank.save()

        }
    }


    async seed(){
        await this.createUser();
    }
    randomRange(min,max): number // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    shuffle(list) {
        var input = list;
         
        for (var i = input.length-1; i >=0; i--) {
         
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
             
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }
    

}

