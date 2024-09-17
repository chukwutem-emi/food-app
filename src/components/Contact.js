const Contact = () => {
    return (
        <div className="w-[40rem] my-0 mx-auto">
            <form className="w-[30rem] box-border p-4 shadow-2xl mt-[4rem] my-0 mx-auto">
                <h1 className="font-bold text-3xl box-border text-center">Contact us page</h1>
                <label className="block text-[1.2rem]">Name:</label>
                <input type="text" className="outline-none border-black border-solid border-[1px] text-center font-sans p-2 mb-4 rounded-lg box-border w-[100%]" placeholder="name"/>
                <label className="block text-[1.2rem]">Message:</label>
                <input type="text" className="outline-none border-black border-solid border-[1px] text-center font-sans p-2 box-border w-[100%] mb-4 rounded-lg" placeholder="message"/>
                <button type="submit" className="p-2  text-white bg-green-900 cursor-pointer w-[100%] box-border rounded-lg">Submit</button>
            </form>
        </div>
    );
};
export default Contact;