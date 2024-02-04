import { useState, React } from "react";
// import {useRef} from 'react';
import Footer from "./Footer";
import Dates from "./Dates";
import Table from "./Table";
// import Notes from "./Notes";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Header from "./Header";
import Navbar from "./Navbar";
import TableForm from "./TableForm";
// import ReactToPrint from "react-to-print";


const Invoice = () => {
  const [ShowInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const [notes, setNotes] = useState("");

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  // const [width] = useState(641);
  // const [invoices, setInvoices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [showLogoutModal, setShowLogoutModal] = useState(false);

  // const componentRef  = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {" "}
      
      <Navbar />
    
      {ShowInvoice ? (
        <>
         <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        
       
          <Header handlePrint={handlePrint} />

          <MainDetails name={name} address={address} />

          <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
          />

          <Dates
            dueDate={dueDate}
            invoiceDate={invoiceDate}
            invoiceNumber={invoiceNumber}
          />
          
         <Table list={list} setList={setList}  description={description} quantity={quantity} price={price} amount={amount} total={total} />

          {/* <Notes notes={notes} /> */}

          <Footer
            name={name}
            address={address}
            email={email}
            website={website}
            bankAccount={bankAccount}
            bankName={bankName}
            phone={phone}
          />

        <button
            className="bg-gray-500 mt-10 text-red font-bold py-2 px-8 rounded shadow border-2 border-black-500 hover:bg-transparent hover: text-black-500 transition-all duration-300"
            onClick={() => setShowInvoice(false)}
          >
            Edit Information
          </button>
          </main>

        </>
      )
       : (
        <>
          <div className="mx-10 flex flex-col justify-center">

            <article className="md:grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label htmlFor="name">Your full name</label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Enter your name"
                  maxLength={56}
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address">Enter your address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  autoComplete="off"
                  maxLength={96}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  maxLength={255}
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Invoice Date"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website">Enter your website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter your website"
                  maxLength={96}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Enter your phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  maxLength={12}
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter your bank name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter your bank name"
                  maxLength={56}
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Enter your bank account number
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter your bank account number"
                  maxLength={20}
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">Enter your client's name</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter your client's name"
                  maxLength={56}
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress">
                  Enter your client's address
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter your client's address"
                  maxLength={96}
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">

              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice Number"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Invoice Date"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>

              <div>
             
              </div>
                   {/* TableForm */}

                   <section>

               <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} isEditing={isEditing} setIsEditing={setIsEditing}
                setTotal={setTotal} total={total}/>
              
               </section>

               {/* Notes section  */}
               <section>
              {/* <div>
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  name="notes"
                  id="notes"
                  cols="15"
                  rows="10"
                  placeholder="Additional notes to the client"
                  maxLength={500}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div> */}
              </section>

            </article>

            <button style={{ marginLeft:"550px" , maxWidth:'20%'}}
              onClick={() => setShowInvoice(true)} className="mt-3 bg-gray-500 text-red font-bold py-2 px-8 rounded shadow border-2 border-black-500 hover:bg-transparent hover: text-black-500 transition-all duration-300"
            >
              Preview Invoice
            </button>
            
          </div>
        </>
      )}
    </>
  );
};

export default Invoice;
