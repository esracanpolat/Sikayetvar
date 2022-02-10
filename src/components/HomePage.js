import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Form, Formik, Field } from 'formik';
import { Button, ListGroup, Modal, Input } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
export default function HomePage() {

    let navigate = useNavigate();

    const [fetchList, setFetchList] = useState([]);
    const [warningConfirm, setWarningConfirm] = useState(false);
    const [showDetail, setShowDetail] = useState();
    const [showUpdateModal, setShowUpdateModal] = useState(false);


    useEffect(() => {
        const resp = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {
                if (resp && resp.data) {
                    setFetchList(resp.data.slice(0, 6))
                }
            });

    }, []);

    return (
        <div className='d-flex justify-content-center list'>
            <div style={{ width: "80%" }}>
                <ListGroup variant="flush" style={{ marginTop: 80 }}>
                    {fetchList.length > 0 && fetchList.map((x) =>
                    (<><ListGroup.Item style={{ height: 80 }} key={x.id} className="d-flex justify-content-bewtween align-items-center">
                        <div><p style={{ fontWeight: "bold" }}>{x.id}</p></div>
                        <div><p style={{ marginLeft: 40 }}>{x.title}</p></div>
                        <div style={{ position: "absolute", right: 0 }}>
                            <Button className="detail-button" onClick={() => navigate(`/post/${x.id}/users/${x.userId}`)}>Detay</Button>
                            <Button className="edit-button" onClick={() => {

                                setShowDetail(x); setShowUpdateModal(true);
                            }}>Düzenle</Button>
                            <Button className="delete-button" onClick={() => setWarningConfirm(true)} variant="danger">Sil</Button></div>
                    </ListGroup.Item>
                        <Modal show={warningConfirm} onHide={() => setWarningConfirm(false)}>
                            <Modal.Header >
                                <Modal.Title>Uyarı</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Silmek istediğinize eminmisiniz !!!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => {
                                    const newList = fetchList.filter((item) => item.id !== x.id);
                                    setFetchList(newList);
                                    setWarningConfirm(false);
                                }}>
                                    Sil
                                </Button>
                                <Button variant="secondary" onClick={() => setWarningConfirm(false)}>
                                    Vazgeç
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </>))}
                </ListGroup>
            </div>

            <Modal
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "16px" }}>Düzenle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ title: showDetail && showDetail.title, body: showDetail && showDetail.body }}
                        onSubmit={async (values) => {
                            const newList = fetchList.map((item) => {
                                if (item.id == showDetail.id) {
                                    const updatedItem = {
                                        ...item,
                                        title: values.title,
                                        body: values.body
                                    };
                                    return updatedItem;
                                }

                                return item;
                            });

                            setFetchList(newList);
                            setShowUpdateModal(false);
                        }}
                    >
                        <Form>
                            <div style={{ marginTop: 20 }}>
                                <label>Title:</label>
                                <Field className="homepage-text" name="title" type="text" />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label>Body</label>
                                <Field name="body" className="homepage-textarea" as="textarea" />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Button variant="primary" type="submit">Gönder</Button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    );
}
