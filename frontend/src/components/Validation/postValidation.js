import * as Yup from "yup";

const postSchema = new Yup.object({
    title : Yup.string().min(10).max(100).required(),
    meta : Yup.string().min(10).max(200).required(),
});

export default postSchema;