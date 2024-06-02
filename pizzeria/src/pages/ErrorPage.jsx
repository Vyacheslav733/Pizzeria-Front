import { Alert, Button, Container } from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <Container fluid className='m-0 p-3 row justify-content-center'>
            <Alert className='col-12 col-lg-6' variant='danger'>
                {error?.message ?? 'Страница не найдена'}
            </Alert>
            <div className='w-100'></div>
            <Button className='col-12 col-lg-6' variant='primary'
                onClick={() => navigate(-1)}>Назад</Button>
        </Container>
    );
};

export default ErrorPage;
