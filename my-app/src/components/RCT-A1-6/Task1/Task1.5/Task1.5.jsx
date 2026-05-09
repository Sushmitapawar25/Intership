import React,{Component} from "react";

class Task15 extends Component{

    state ={

        filter:{
            brand:"",
            ram:"",
            ratings:[],
            processors:[],
            hardDisks:[],
        },

        brands:[
            "Dell",
            "HP",
            "Lenovo",
            "Asus",
        ],

        rams:[
            "4GB",
            "8GB",
            "16GB",
            "32GB",
        ],

        ratings:[
            "4★ & above",
            "3★ & above",
            "2★ & above",
        ],

        processors:[
            "i3",
            "i5",
            "i7",
            "Ryzen 5",
            "Ryzen 7",
        ],

        hardDisks:[
            "256GB",
            "512GB",
            "1TB",
            "2TB",
        ],
    };

    updateCBs = (checked,value,arr) => {
        let newArr = [...arr];
        if(checked)
            newArr.push(value);
        else{
            let index =
                newArr.findIndex(
                    (ele) => ele === value
                );
            if(index >= 0)
                newArr.splice(index,1);
        }
        return newArr;
    };

    handleChange = (e) => {
        const {currentTarget:input} = e;
        let s1 = {...this.state};
        if(input.type === "checkbox"){
            s1.filter[input.name] =
                this.updateCBs(
                    input.checked,
                    input.value,
                    s1.filter[input.name]
                );
        }
        else{
            s1.filter[input.name] = input.value;
        }
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.filter);
    }

    render(){

        let {
            brand,
            ram,
            ratings,
            processors,
            hardDisks
        } = this.state.filter;

        let {
            brands,
            rams
        } = this.state;

        return(
            <div className="container mt-4">
                <h4 className="mb-3">
                    Filter Laptops
                </h4>
                <div className="form-group mb-3">
                    <label>
                        Brand
                    </label>
                    <select
                        className="form-control"
                        name="brand"
                        value={brand}
                        onChange={this.handleChange}
                    >
                        <option value="">
                            Select Brand
                        </option>
                        {
                            brands.map((b1,index) => (

                                <option key={index}>
                                    {b1}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label>
                        RAM
                    </label>
                    <select
                        className="form-control"
                        name="ram"
                        value={ram}
                        onChange={this.handleChange}
                    >
                        <option value="">
                            Select RAM
                        </option>
                        {
                            rams.map((r1,index) => (

                                <option key={index}>
                                    {r1}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <label className="fw-bold">
                    Ratings
                </label>

                {
                    this.state.ratings.map((r1,index) => (
                        <div
                            className="form-check"
                            key={index}
                        >
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="ratings"
                                value={r1}
                                checked={
                                    ratings.findIndex(
                                        (r2) => r2 === r1
                                    ) >= 0
                                }
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label">
                                {r1}
                            </label>
                        </div>
                    ))
                }
                <br/>
                <label className="fw-bold">
                    Processor
                </label>
                {
                    this.state.processors.map((p1,index) => (
                        <div
                            className="form-check"
                            key={index}
                        >
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="processors"
                                value={p1}
                                checked={
                                    processors.findIndex(
                                        (p2) => p2 === p1
                                    ) >= 0
                                }
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label">
                                {p1}
                            </label>
                        </div>
                    ))
                }
                <br/>
                <label className="fw-bold">
                    Hard Disk
                </label>
                {
                    this.state.hardDisks.map((h1,index) => (
                        <div
                            className="form-check"
                            key={index}
                        >
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="hardDisks"
                                value={h1}
                                checked={
                                    hardDisks.findIndex(
                                        (h2) => h2 === h1
                                    ) >= 0
                                }
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label">
                                {h1}
                            </label>
                        </div>
                    ))
                }
                <br/>
                <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                >
                    Apply Filter
                </button>
            </div>
        )
    }
}

export default Task15;