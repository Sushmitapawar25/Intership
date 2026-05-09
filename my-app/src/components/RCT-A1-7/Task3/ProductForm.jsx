import React, { Component } from "react";

class ProductForm extends Component {
    state = {
        product: this.props.product,
        errors: {},
        categories: ["Food", "Electronics", "Apparels", "Grocery"],
        discounts: ["5%", "10%", "20%"],
    };

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.product[input.name] = input.value;
        s1.errors[input.name] = this.validateField(input.name, input.value);
        this.setState(s1);
    };

    handleBlur = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.errors[input.name] = this.validateField(input.name, input.value);
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validateAll();
        if (this.isValid(errors)) {
            alert("Product Successfully Submitted");
            this.props.onSubmit(this.state.product);
        } else {
            let s1 = { ...this.state };
            s1.errors = errors;
            this.setState(s1);
        }
    };

    validateField = (name, value) => {
        switch (name) {
            case "name":
                return this.validateName(value);
            case "description":
                return this.validateDescription(value);
            case "productCode":
                return this.validateProductCode(value);
            case "category":
                return this.validateCategory(value);
            case "price":
                return this.validatePrice(value);
            case "discount":
                return this.validateDiscount(value);
            default:
                return "";
        }
    };

    validateName = (name) =>
        !name
            ? "Name must be entered"
            : name.length < 5
            ? "Name should have minimum 5 characters"
            : !/^[a-zA-Z\s]+$/.test(name)
            ? "Name should have only alphabets"
            : "";

    validateDescription = (description) =>
        !description
            ? "Description must be entered"
            : description.length < 10
            ? "Description should have minimum 10 characters"
            : /[^a-zA-Z0-9\s]/.test(description)
            ? "Description should not have special characters"
            : "";

    validateProductCode = (productCode) =>
        !productCode
            ? "Product Code must be entered"
            : productCode.length !== 6
            ? "Product Code should have exactly 6 characters"
            : !/^[A-Z]{2}[0-9]{4}$/.test(productCode)
            ? "First 2 characters should be uppercase alphabets and last 4 should be digits"
            : "";

    validateCategory = (category) =>
        !category ? "Category must be selected" : "";

    validatePrice = (price) =>
        !price
            ? "Price must be entered"
            : price <= 0
            ? "Price should be greater than 0"
            : "";

    validateDiscount = (discount) =>
        !discount ? "Discount must be selected" : "";

    validateAll = () => {
        const { name, description, productCode, category, price, discount } =
            this.state.product;
        let errors = {};
        errors.name = this.validateName(name);
        errors.description = this.validateDescription(description);
        errors.productCode = this.validateProductCode(productCode);
        errors.category = this.validateCategory(category);
        errors.price = this.validatePrice(price);
        errors.discount = this.validateDiscount(discount);
        return errors;
    };

    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce(
            (acc, curr) => (errors[curr] ? acc + 1 : acc),
            0
        );
        return count === 0;
    };

    isFormValid = () => {
        let errors = this.validateAll();
        return this.isValid(errors);
    };

    render() {
        const { name, description, productCode, category, price, discount } =
            this.state.product;
        const { errors, categories, discounts } = this.state;

        return (
            <div className="container mt-3">
                <h5>Product Form</h5>

                <div className="form-group mb-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Product Name"
                        value={name}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={description}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.description && (
                        <span className="text-danger">{errors.description}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Product Code</label>
                    <input
                        type="text"
                        className="form-control"
                        name="productCode"
                        placeholder="Enter Product Code (e.g. AB1234)"
                        value={productCode}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.productCode && (
                        <span className="text-danger">{errors.productCode}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Category</label>
                    <select
                        className="form-control"
                        name="category"
                        value={category}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    >
                        <option disabled value="">
                            Select Category
                        </option>
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    {errors.category && (
                        <span className="text-danger">{errors.category}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Enter Price"
                        value={price}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.price && (
                        <span className="text-danger">{errors.price}</span>
                    )}
                </div>

                <div className="mb-2">
                    <label className="fw-bold d-block">Discount</label>
                    {discounts.map((d) => (
                        <div className="form-check form-check-inline" key={d}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="discount"
                                value={d}
                                checked={discount === d}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                            <label className="form-check-label">{d}</label>
                        </div>
                    ))}
                    {errors.discount && (
                        <div>
                            <span className="text-danger">{errors.discount}</span>
                        </div>
                    )}
                </div>

                <button
                    className="btn btn-primary mt-2"
                    onClick={this.handleSubmit}
                    disabled={!this.isFormValid()}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default ProductForm;