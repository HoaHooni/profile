import { Avatar, Button, Card } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import IProjects from './interface/IProjects';
import Meta from 'antd/es/card/Meta';
type Props = {
    data: IProjects;
}
const Project: React.FC<Props> = (props) => {
    const data = props.data as IProjects;
    let projectImage = "images/portfolio/" + data.image;
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="item-wrap" onClick={showModal}>
                <Card style={{ height: "15rem" }} loading={loading}>
                    <Meta
                        avatar={<Avatar src={projectImage} style={{ marginTop: "5px" }} />}
                        title={data.title}
                        description={data.category}
                    />
                </Card>
            </div>

            <Modal
                open={open}
                title={data.title}
                // onOk={handleOk}
                width="50%"
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel} icon={<SearchOutlined />}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <p>Some contents...</p>
                <img alt={data.title} src={projectImage} />
            </Modal>
        </>
    )
}

export default Project