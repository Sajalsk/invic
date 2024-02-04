import React, { useEffect } from 'react'
// import {v4 as uuidv4} from 'react-uuid';
import { v4 as uuidv4 } from "uuid";
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai';

const TableForm = ({description,setDescription,quantity,setQuantity,amount,price,setPrice,setAmount,list,setList,setIsEditing,isEditing,setTotal,total}) => {


  const handleSubmit =(e)=>{
    e.preventDefault();

    if (!description || !quantity ||  !price) {
      alert("Please fill all the details")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
      console.log(list);
    }
   

  }

  // calculateAmount

  useEffect(() => {

    const calculateAmount =(amount)=>{
        setAmount(quantity*price)
    }
      calculateAmount(amount)
  }, [amount,quantity,price,setAmount])

   // Calculate total

 const  CalcSum=()=> {

    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  }

  useEffect(() => {
    CalcSum();
     
  });

  
   // Edit function
   const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete item :

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    // CalcSum();
   
  };

  
  return (
    <>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">

          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={33}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              maxLength={33}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <button type='submit' className="mb-3 bg-gray-500 text-red font-bold py-2 px-8 rounded shadow border-2 border-black-500 hover:bg-transparent hover: text-black-500 transition-all duration-300">{isEditing?"Update Changes":"Add items"}
        </button>

        </form>

         {/* Table items */}

      <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>

                <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="mx-5 text-green-500 font-bold text-xl" />
                  </button> 

                <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button> 
              </tr>
            </tbody>

          </React.Fragment>
          
        ))}
        
        <div className="mt-5 text-gray-800 text-2xl font-bold">Total sum is {total.toLocaleString()}</div>
      </table>
       
    </>
  )
}

export default TableForm