import { Meteor } from 'meteor/meteor';
import '/imports/api/productsMethods';
import '/imports/api/productsPublications';
import {Accounts} from 'meteor/accounts-base';


const SEED_USERNAME = 'marwa';
const SEED_PASSWORD = 'password';




Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});