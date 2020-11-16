
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())


const foods = [ 
    {'names': 'Pepperoni Pizza', 'calories': 298, 'price': 5, 'popularity': 10},
      {'names': 'Cheese Pizza', 'calories': 310, 'price': 4, 'popularity': 8 },
      {'names': 'Chicken Pizza', 'calories': 350, 'price': 6, 'popularity': 7},
      {'names': 'Veggie Pizza', 'calories': 327, 'price': 7, 'popularity': 9},
      {'names': 'Sausage Pizza', 'calories': 443, 'price': 6, 'popularity': 5},
      {'names': 'Jalapeno Pizza', 'calories': 320, 'price': 6, 'popularity': 10},
      {'names': 'Hawaiian Pizza', 'calories': 479, 'price': 8, 'popularity': 4},
      {'names': 'Stuffed Crust Pizza', 'calories': 605, 'price': 9, 'popularity': 10},
      {'names': '2 Topping Pizza', 'calories': 800, 'price': 7, 'popularity': 10},
      {'names': 'Build your Own Pizza', 'calories': 1000, 'price': 10, 'popularity': 10}]


 

app.get('/api', cors(), (req, res) => {
    req.headers['Content-Type'] = 'application/json'
    req.headers['Accept'] = 'application.json'
    res.send(foods); 
});

const port = 3001
app.listen(port, () => console.log(`Listening on Port ${port}`));


