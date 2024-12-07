import React from "react"
import Header from "./Component/Header"
import Footer from "./Component/Footer";
import Product from "./Component/Product";
import Service from "./Component/Service";


class App extends React.Component {   //here class component is used
    render() {
        return <div>

            <Header />
            <Footer />
            <Product />
            <Service />
        </div>
    }
}
export default App;
