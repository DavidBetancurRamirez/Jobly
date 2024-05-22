import React from 'react';
import styled from 'styled-components';
import Layout from '../elements/Layout';
import { Titulo } from '../styles/empresas';

// Sample JSON data simulating fetched job postings
const trabajos = [
    { id: 1, title: 'Desarrollador Frontend', description: 'Desarrollo de interfaces con React.', empresa: 'Tech Solutions' },
    { id: 2, title: 'Analista de Datos', description: 'Análisis de grandes volúmenes de datos.', empresa: 'Data Analytics Inc.' },
    { id: 3, title: 'Ingeniero de Software', description: 'Desarrollo de backend con Node.js.', empresa: 'Software Corp' }
];

const Container = styled.div`
    display: flex;         // Enables flexbox
    flex-direction: column; // Stack children vertically
    align-items: center;    // Center-align children horizontally
    justify-content: center; // Center-align children vertically
    padding: 20px;
    background-color: #f4f4f4; // Assuming white backgrounds are common
    border-radius: 8px;
`;

const JobList = styled.ul`
    list-style: none;
    padding: 0;
`;

const JobItem = styled.li`
    position: relative;  // Needed for absolutely positioning the ApplyButton
    width: 100vh;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const JobTitle = styled.h2`
    color: #283583; // Dark grey for text, less harsh than black
    font-size: 20px;
`;

const JobDescription = styled.p`
    font-size: 16px;
    color: #666;
`;

const CompanyName = styled.small`
    font-size: 14px;
    color: #999;
`;

const ApplyButton = styled.button`
    position: absolute;  // Position the button relative to its nearest positioned ancestor (JobItem)
    bottom: 10px;        // 10px from the bottom of the JobItem container
    right: 10px;         // 10px from the right of the JobItem container
    padding: 8px 16px;   // Padding around the text
    font-size: 14px;     // Text size
    color: white;        // Text color
    background-color: #283583; // Button background color
    border: none;        // No border
    border-radius: 5px;  // Rounded corners
    cursor: pointer;     // Pointer cursor on hover

    &:hover {
        background-color: #0056b3; // Darker shade on hover
    }
`;

const AllTrabajos = () => {
    return (
        <Layout>
            <Container>
                <Titulo>
                    Todos los trabajos
                </Titulo>
                <JobList>
                    {trabajos.map(trabajo => (
                        <JobItem key={trabajo.id}>
                            <JobTitle>{trabajo.title}</JobTitle>
                            <JobDescription>{trabajo.description}</JobDescription>
                            <CompanyName>Publicado por: {trabajo.empresa}</CompanyName>
                            <ApplyButton>Aplicar</ApplyButton>
                        </JobItem>
                    ))}
                </JobList>
            </Container>
        </Layout>
    );
};

export default AllTrabajos;
