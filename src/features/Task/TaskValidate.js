import * as Yup from 'yup';

export const TaskSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required!')
});