import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const Form3 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    tel: "",
  });

  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //* default davranisini engelle, yani butona basitignda sunucuya gonderme diyoruz. Bizim kontrolumuzde olsun diye

    setLoading(true);
    setMesaj("");
    //!Burası fake API:
    setTimeout(() => {
      setMesaj("Bilgileriniz başarılı bir şekilde gönderildi.");
      setLoading(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                required //*!required koyarsak bu alanı boş geçemez kullanıcı */
                minLength="10" //! min-maxLength ile de karakter sınırlaması yapabiliriz*/
                name="ad"
                type="text"
                placeholder="Adınızı giriniz"
                value={formData.ad}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                name="soyad"
                type="text"
                placeholder="Soyadınızı giriniz"
                value={formData.soyad}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-posta adresiniz</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="E-postanızı giriniz"
                value={formData.email}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tel">
              <Form.Label>Telefon numaranız</Form.Label>
              <Form.Control
                name="tel"
                type="text"
                placeholder="Telefon numaranızı giriniz"
                value={formData.tel}
                onChange={handleForm}
              />
            </Form.Group>
            <Button variant="success" type="submit" disabled={loading}>
              {loading && (
                <Spinner animation="border" variant="light" size="sm" />
              )}
              KAYDET
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form3;
