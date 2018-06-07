db.restaurants.find()
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1})
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0})
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, "address.zipcode":1, _id:0})
db.restaurants.find({district:"Bronx"});
db.restaurants.find({district:"Bronx"}).limit(5).pretty()
db.restaurants.find({district:"Bronx"}).skip(5).limit(5).pretty()
db.restaurants.find({"address.coord.0": {$lt: -95.754168}}).pretty()
db.restaurants.find({cuisine:{$ne: 'American'} , grades:{$elemMatch: {"score": {$gt: 70}}} , "address.coord.0": {$lt: -65.754168}}).pretty();
db.restaurants.find({name: {$regex:"^Wil"}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();
db.restaurants.find({name: {$regex:"ces$"}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();
db.restaurants.find({name: {$regex:"Reg"}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();
db.restaurants.find({district:"Bronx", cuisine:{$in:['American','Chinese']}}).pretty();
db.restaurants.find({district: {$in:['Staten Island', 'Queens','Bronx', 'Brooklyn']}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();
db.restaurants.find({district: {$nin:['Staten Island', 'Queens','Bronx', 'Brooklyn']}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();
db.restaurants.find({grades:{$elemMatch: {"score": {$lte: 10}}}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).limit(5).pretty();
db.restaurants.find({"address.coord.1": {$gt: 42, $lte: 52}}, {restaurant_id:1, name: 1, address:1, _id:0}).limit(5).pretty()
db.restaurants.find({}, {name:1, restaurant_id:1, address:1, district:1, cuisine:1, grades:1}).sort({'name': 1}).pretty()
db.restaurants.find({}, {name:1, restaurant_id:1, address:1, district:1, cuisine:1, grades:1}).sort({'name':-1}).pretty()
db.restaurants.find({}, {name:1, restaurant_id:1, address:1, district:1, cuisine:1, grades:1}).sort([['cuisine',1], ['district',-1]]).pretty()
db.restaurants.find({"address.street":{$exists:false}}).count()  //If return 0 then it means all addresses contains street. Otherwise: there is a document whose address doesn’t contain street
db.restaurants.find({$or:[{"address.coord.0":{$type: "double"}},{"address.coord.1":{$type: "double"}} ]}).pretty()
db.restaurants.find({name:{$regex:"^Mad"}},{name: 1,district:1, "address.coord":1, _id:0} ).pretty()
