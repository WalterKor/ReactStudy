import React, { useState, useEffect} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const PrivateOptions = [
    { value: 0, label:'Private'},
    { value: 1, label:'Public'}
]

const CatogoryOption = [
    { value: 0, label: "Film & Animation" },
    { value: 0, label: "Autos & Vehicles" },
    { value: 0, label: "Music" },
    { value: 0, label: "Pets & Animals" },
    { value: 0, label: "Sports" },
]

function UploadVideoPage() {
    
    const [VideoTitle, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")
    const [FilePath, setFilePath] = useState("")

    const onTitleChange = (event) => {
        setTitle(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
    
        setDescription(event.currentTarget.value)
    }
    
    const onPrivateChange = (event) => {
        setPrivate(event.currentTarget.value)
    }

    const onCategoryChange = (event) => {
        setCategory(event.currentTarget.value)
    }

    const onSubmit = () => {
        
    }

    const onDrop = ( files ) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        
        axios.post('/api/video/uploadfiles', formData, config)
        .then(response=> {
            if(response.data.success){
                console.log(response.data);

                let variable = {
                    url : response.data.url,
                    fileName : response.data.fileName
                };

                axios.post('/api/video/thumbnail', variable)
                .then(response => {
                    if(response.data.success){

                    }else{
                        alert('썸네일 생성에 실패하셨습니다.')
                    }
                })
            }else{
                alert('비디오 업로드를 실패했습니다.')
            }
        })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2} > Upload Video</Title>
        </div>

        <Form onSubmit={onSubmit}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone 
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={1000000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize: '3rem' }} />

                        </div>
                    )}
                </Dropzone>

                {/* {thumbnail !== "" &&
                    <div>
                        <img src={`http://localhost:5000/${thumbnail}`} alt="haha" />
                    </div>
                } */}
            </div>

            <br /><br />
            <label>Title</label>
            <Input
                 onChange={onTitleChange}
                 value={VideoTitle}
            />
            <br /><br />
            <label>Description</label>
            <TextArea
                 onChange={onDescriptionChange}
                 value={Description}
            />
            <br /><br />

            <select onChange={onPrivateChange}>
                {PrivateOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
            <br /><br />

            <select onChange={onCategoryChange}>
                {CatogoryOption.map((item, index) => (
                    <option key={index} value={item.label}>{item.label}</option>
                ))}
            </select>
            <br /><br />

            <Button type="primary" size="large" onClick={onSubmit}>
                Submit
            </Button>

        </Form>
    </div>
    )
}

export default UploadVideoPage