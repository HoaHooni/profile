import { Avatar, Button, Card, Timeline } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'
import IProjects from './interface/IProjects';
import Meta from 'antd/es/card/Meta';
type Props = {
    data: IProjects;
}
const Project: React.FC<Props> = (props) => {
    const data = props.data as IProjects;
    let projectImage = "images/portfolio/" + data.thumbnail;
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const Footer = ({ url }: { url?: string }) => {
        return (
            <div>
                <Button key="back" onClick={handleCancel}>
                    Return
                </Button>
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Submit
                </Button>
                {url ? <Button
                    key="live"
                    type="primary"
                    loading={loading}
                    onClick={() => handleLiveDemo(url)}
                >
                    Live Demo
                </Button> : ""}
            </div>
        )
    }


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

    const handleLiveDemo = (url?: string) => {
        if (url) {
            window.open(url, "_blank");
        }
        setOpen(false);
    };

    return (
        <>
            <div className="item-wrap" onClick={showModal}>
                <Card style={{ height: "15rem" }} loading={loading}>
                    <Meta
                        avatar={<Avatar src={projectImage} style={{ marginTop: "5px" }} />}
                        title={data.title}
                        description={data.shortDescription}
                    />
                </Card>
            </div>

            <Modal
                open={open}
                title={data.title}
                width="60%"
                onCancel={handleCancel}
                footer={<Footer url={data.url} />}
            >
                {data.description}

                <Timeline mode='left' style={{ paddingRight: "50%", paddingTop: "2rem" }}>
                    <Timeline.Item label="responsible">{data.responsible}</Timeline.Item>
                    <Timeline.Item label="languages">{data.languages}</Timeline.Item>
                    <Timeline.Item label="tools">{data.tools}</Timeline.Item>
                    <Timeline.Item label="other">{data.other}</Timeline.Item>
                </Timeline>
            </Modal>
        </>
    )
}

export default Project