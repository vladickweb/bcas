import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import './Register.css'

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: null
		}
	}

	handleChange = e => {
		const { value, name } = e.target

		this.setState({
			...this.state,
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { email } = this.state

		this.props.updateUserEmail({ user: { email } })
		this.props.history.push('/becas')
	}

	render() {
		return (
			<Container className='p-5'>
				<h1 className='title-register mb-4'>Hemos encontrado varias becas que te encajan</h1>
				<p className='mb-4'>Regístrate para ver los resultados de la búsqueda</p>

				<Form onSubmit={e => this.handleSubmit(e)}>
					<Form.Group className='mb-3'>
						<Form.Label>
							<p className='mb-1'>Email</p>
						</Form.Label>
						<Form.Control
							className='custom-form mb-5'
							type='email'
							placeholder='E.g. manuel@gmail.com'
							name='email'
							onChange={e => this.handleChange(e)}
							required={true}
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button className='custom-button padding-button' variant='primary' type='submit'>
							DIME MIS BECAS
						</Button>
					</div>
				</Form>

				<div className='row justify-content-center text-center mt-5 footer-register'>
					<p className='mb-1'>RECOMIENDANOS</p>
					<p>O SIGUE NUESTRO BLOG PARA MÁS INFO</p>
				</div>
			</Container>
		)
	}
}
