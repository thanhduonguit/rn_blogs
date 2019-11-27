import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input} 
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input} 
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        name: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
});

export default BlogPostForm;