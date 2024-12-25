const validateForm = (id: string, value: string) => {
    switch (id) {
        case 'name':
            if (value.length === 0) return "Name is Required";
            if (value.length < 3) return "Name must be atleast 3 characters long";
            return "";
        case 'email':
            if (value.length === 0) return "Email is Required";
            if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value)) return "Email is invalid";
            return "";
        case 'phone':
            if (value.length === 0) return "Phone Number is Required";
            if (!/^[0-9]*$/.test(value)) return "Phone Number is invalid";
            if (value.length !== 10) return "Phone Number must be 10 digits long";
            return "";
        case 'message':
            if (value.length === 0) return "Message is required";
            return "";
        default:
            return "";
    }
}
export { validateForm }