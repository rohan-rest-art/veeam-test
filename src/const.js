export const formConfig = {
  formTitle: 'User profile',
  items: [
    {
      label: 'Full name',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Birthday',
      name: 'birthday',
      type: 'date',
    },
    {
      label: 'Married',
      name: 'married',
      type: 'checkbox',
    },
    {
      label: 'Children',
      name: 'children',
      type: 'number',
    },
    {
      label: 'Profession',
      name: 'profession',
      type: 'radio',
      values: ['it', 'medicine', 'education', 'managment'],
    },
    {
      label: 'About',
      name: 'about',
      type: 'textarea',
    },
  ],
  buttons: ['Apply', 'Cancel'],
}
