import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert(' Your Droned Added Successfully');
                    reset();
                }
            })
    }



    return (
        <div className="add-service">
            <br />
            <br />
            <br />
            <br />
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Drone-Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Drone-Price" />
                <input {...register("img")} placeholder="image url" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;