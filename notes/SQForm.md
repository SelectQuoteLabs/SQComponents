# SQForm

-- SQ Form System

## Design Notes

--

## Technical Notes

The SQ Form system leverages Formik to control the state of a form.

**SQForm**

The `onSubmit` prop is very important to understand. It is passed your forms values and the "FormikBag", which includes an object containing a subset of the injected props and methods (i.e. all the methods with names that start with set<Thing> + resetForm) and any props that were passed to the wrapped component.

```
Form Submission Handler |
@typedef onSubmit: (values: Values, formikBag: FormikBag) => void | Promise<any>
```

IMPORTANT: If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved.
This means you do NOT need to call formikBag.setSubmitting(false) manually.
However, if your onSubmit function is synchronous, then you need to call setSubmitting(false) on your own.
If you're still reading this, I commend you. The docs say all of this by the way :)

**SQTextField**

The `helperText` prop defaults to an empty space it is always present in the DOM. This prevents UI bounce when the placeholder text appears, changing the calculated height of the input.

## Library Documentation

- [Formik](https://jaredpalmer.com/formik/docs/overview)
- [Formik Validation Schema](https://jaredpalmer.com/formik/docs/guides/validation#validationschema)
- [Yup](https://github.com/jquense/yup)
- [Form Layout /w MUI Grid](https://material-ui.com/components/grid/)
