//data structure:
// {
//     "_id" : "01001",
//     "city" : "AGAWAM",
//     "loc" : [
//             -72.622739,
//             42.070206
//     ],
//     "pop" : 15338,
//     "state" : "MA"
// }


//1) Find all zip codes in Iowa state
db.zips.aggregate([
    {$match:{state:'IA'}},
    {$project:{
        _id:0,
        zip_code: '$_id',
        state:'$state'
    }}
])

//2) Find all the zip codes with a population less than 1000
db.zips.aggregate([
    {$match:{pop:{$lt:1000}}}, 
    {$project:{
        _id:0,
        zip_code:'$_id', 
        population:'$pop'
    }}
])

//3) Find all cities that have more than one zip code, sort the results based on state and city name
db.zips.aggregate([
    {$group:{
        _id:{state:'$state', city:'$city'}, 
        num_zip_codes:{$sum:1}
    }}, 
    {$match:{num_zip_codes:{$gt:1}}}, 
    {$sort:{
       '_id.state':1,
       '_id.city':1
    }}, 
    {$project:{
        _id:0,
        state:'$_id.state',
        city:'$_id.city',
        num_zip_codes:'$num_zip_codes'
    }}
])

//4) Display the least populated city in each state
db.zips.aggregate([
    {$group:{
        _id:{state:'$state', city:'$city'},
        population:{$sum:'$pop'}
    }}, 
    {$sort:{
        '_id.state':1,
        'population':1}},
    {$group:{
        _id:'$_id.state',
        city:{$first:'$_id.city'},
        population:{$first:'$population'} 

    }},
    {$sort:{_id:1}}, 
    {$project:{
        _id:0,
        state:'$_id',
        city:'$city',
        population:'$population'
    }}
])