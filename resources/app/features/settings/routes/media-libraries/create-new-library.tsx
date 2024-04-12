import { Button, Form, Layout, Typography } from '@douyinfe/semi-ui';
import { gql, useMutation } from '@apollo/client';
import { Library } from '@/graphql/__generated__/graphql.ts';
import ErrorMessage from '@douyinfe/semi-ui/lib/es/form/errorMessage';

const CREATE_LIBRARY = gql`
  mutation CreateLibrary($name: String!, $type: LibraryType!, $path: String!, $order: Int!) {
    createLibrary(name: $name, type: $type, path: $path, order: $order) {
      id
      name
      type
      path
      order
    }
  }
`;

export interface LibraryInput {
  name: string;
  type: string;
  path: string;
}

export function CreateNewLibrary() {
  const {Content} = Layout;
  const {Title} = Typography;
  const libraryTypes = [
    {label: 'Music', value: 'Music'},
    {label: 'Podcast', value: 'Podcast'},
    {label: 'Audiobook', value: 'Audiobook'},
    {label: 'Movie', value: 'Movie'},
    {label: 'Tv Show', value: 'TvShow'},
  ];

  const [createLibrary, { data, loading, error }] = useMutation<Library>(CREATE_LIBRARY);

  const submitHandler = async (values: LibraryInput) => {
    await createLibrary({
      variables: {
        name: values.name,
        type: values.type,
        path: values.path,
        order: 0,
      },
    });
  }

  return (
    <Content style={{ padding: '1rem' }}>
      <Title>Create new library</Title>

      {!data && (
        <Form<LibraryInput> style={{ maxWidth: '500px' }} onSubmit={submitHandler}>

          <Form.Input field="name" label="Name"/>

          <Form.Select field="type" label="Type" optionList={libraryTypes}/>

          <Form.Input field="path" label="Path"/>

          <Button htmlType="submit" type="primary" disabled={loading}>Create</Button>
        </Form>
      )}

      {error && (
        <ErrorMessage>{error.message}</ErrorMessage>
      )}

      {data && (
        <p>Library {data.name} created successfully!</p>
      )}
    </Content>
  );
}
