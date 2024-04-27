import { Accordion } from 'react-bootstrap';

const Faq = () => {
  return (
    <section className="">

<div >
      <p className='mt-5'>&nbsp;</p>

        <center className='mt-4'>
            <hr className="hr-title" />
            <h4 className="mb-3">Frequently Asked Questions</h4>
            </center>
      </div>

      <div className="container mb-5">
        <Accordion flush id="accordionFlushExample">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I place an order?</Accordion.Header>
            <Accordion.Body>
              - To place an order, simply browse our website or mobile app, select the items you want to purchase, and proceed to checkout. Follow the prompts to enter your shipping address, payment details, and complete the order.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What payment methods are accepted?</Accordion.Header>
            <Accordion.Body>
              - We accept various payment methods including credit/debit cards, online banking, and cash on delivery (COD). You can choose the option that is most convenient for you during checkout.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I track my order?</Accordion.Header>
            <Accordion.Body>
              - Yes, once your order is confirmed and shipped, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery in real-time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What are the delivery options available?</Accordion.Header>
            <Accordion.Body>
              - We offer various delivery options including standard shipping, express delivery, and same-day delivery in select areas. You can choose the option that best suits your needs during checkout.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Is there a minimum order requirement?</Accordion.Header>
            <Accordion.Body>
              - No, there is no minimum order requirement. You can purchase as little or as much as you need.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How can I contact customer support for assistance?</Accordion.Header>
            <Accordion.Body>
              - If you need assistance or have any questions, our customer support team is available via email, phone, or live chat. You can find our contact information on the website or mobile app.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
