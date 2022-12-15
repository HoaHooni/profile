import { Avatar, Button, Card, Timeline } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'
import IProjects from './interface/IProjects';
import Meta from 'antd/es/card/Meta';
import '../scss/project.scss';
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

    const convertDate = (date?: number) => {
        if (!date) {
            return "";
        }
        const newDate = new Date(date);
        console.log("date: ", newDate.toLocaleDateString());
        return `${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }

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
                className="project-detail"
                width="60%"
                onCancel={handleCancel}
                footer={<Footer url={data.url} />}
            >
                <div className="header">
                    <Avatar src={projectImage} style={{ marginTop: "5px" }} size={80} />
                    <div>
                        <h2>{data.title}</h2>
                        <p> {convertDate(data.fromDate)} - {convertDate(data.toDate)}</p>
                    </div>
                </div>
                <div>
                    {data.description}
                </div>

                <Timeline mode='left' style={{ paddingRight: "50%", paddingTop: "2rem" }}>
                    <Timeline.Item label="Responsible">{data.responsible}</Timeline.Item>
                    <Timeline.Item label="Languages">{data.languages}</Timeline.Item>
                    <Timeline.Item label="Tools">{data.tools}</Timeline.Item>
                    <Timeline.Item label="Other">{data.other}</Timeline.Item>
                </Timeline>
            </Modal>
        </>
    )
}

export default Project