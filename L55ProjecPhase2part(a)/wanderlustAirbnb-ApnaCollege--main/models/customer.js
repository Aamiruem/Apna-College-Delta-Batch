// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// main()
//     .then(() => console.log('connection successful'));
//     // .catch ((err) => console.log(err));
// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
// }

// const orderSchema = new Schema({
//     username: String,
//     address: [
//         {
//         _id: false,
//         location: String,
//         city: String,
//         pincode: Number,
//     },
//   ],
// });










// const orderSchema = new Schema({
//     item: String,
//     price: Number,
//     quantity: Number,
//     });

// const Order = mongoose.model("Order", orderSchema);
// const addOrders = async () => {
//     let res = await Order.insertMany([
//     { item: "samosa", price: 12, quantity: 5 },
//     { item: "pizza", price: 25, quantity: 3 },
//     { item: "burger", price: 15, quantity: 7 },
//     { item: "chicken", price: 30, quantity: 2 },
//     ]);
//     console.log(res);
// }
//     addOrders();






// const validOrderId = new mongoose.Types.ObjectId();
// const orderIds = ["6040241394538560", "6040241394538561"];

// const convertedIds = orderIds.map(id => {
//   if (mongoose.Types.ObjectId.isValid(id)) {
//     return mongoose.Types.ObjectId(id);
//   } else {
//     throw new Error(`Invalid ObjectId: ${id}`);
//   }
// });


// db.collection.updateMany(
//   { "orders.order": { $type: "string" } },
//   { $set: { "orders.order": ObjectId("your-valid-id-here") } }
// );


// customer.save().catch(err => {
//   console.error("Validation error:", err);
// });

// const customerSchema = new Schema({
//     name: String,
//     email: String,
//     password: String,
//     orders: [
//         {
//         _id: false,
//         order: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Order",
//         },
//         quantity: Number,
//         },
//     ],
// });

// const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//     let res = await Customer.insertMany([
//         {
//             name: "John",
//             email: "john@gmail.com",
//             password: "1234",
//             orders: [
//                 { order: "6040241394538560", quantity: 2 },
//                 { order: "6040241394538561", quantity: 3 },
//             ],
//         },
//         {
//             name: "Jane",
//             email: "jane@gmail.com",
//             password: "1234",
//             orders: [
//                 { order: "6040241394538562", quantity: 2 },
//                 { order: "6040241394538563", quantity: 3 },
//             ],
//         },
//     ]);
//     console.log(res);

//     let customer = await Customer.findOne({ name: "John" });
//     console.log(customer);
// }

// addCustomers();




























const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => console.log('connection successful'));
    // .catch ((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
    quantity: Number,
});
    
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",   
        }
    ],
});



// const findCustomer = async () => {
//     const customer = await Customer.find().populate("orders").exec();
//     console.log(customer);


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name: "kamran Hussain",
    });


    // const addOrders = async () => {
    // let order = new Customer({
    //     name: "Afroz Hussain",
    // });

    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Burger" });
    let order3 = await Order.findOne({ item: "Chocolate" });

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);
    // cust1.orders.push(order3);
    // let result = await cust1.save();
    // console.log(result);


//this is a wrong  code
    // let result = await Customer.findOneAndUpdate({ name: "kamran Hussain" }, { $push: { orders: order1._id, orders: order2._id, orders: order3._id } }, { new: true });
    // console.log(result);
    


    // let result = await Customer.find({});
    // console.log(result);





  
        let result = await Customer.findOne({ name: "kamran Hussain" });
        console.log(result);
};

// addOrders();
// addCustomer();
    findCustomer();
