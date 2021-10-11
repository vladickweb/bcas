import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import './UserInfo.css'

export default class UserInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			day: null,
			month: null,
			year: null,
			nationality: null,
			region: null,
			averageScore: null
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
		const { day, month, year, nationality, region, averageScore } = this.state

		this.props.updateUserData({
			user: {
				day,
				month,
				year,
				nationality,
				region,
				averageScore
			}
		})
		this.props.history.push('/registro')
	}

	render() {
		return (
			<Container className='p-4'>
				<h1 className='font-weight-light title-info mb-5'>
					Para decirte que becas tienes disponible nos hace falta saber un poco más de ti
				</h1>
				<Form onSubmit={e => this.handleSubmit(e)}>
					<Form.Group className='mb-5'>
						<Form.Label>
							<p className='mb-0'>¿Cuándo naciste?</p>
							<small>¡Te felicitaremos por tu cumpleaños!</small>
						</Form.Label>
						<div>
							<Form.Control
								className='custom-form custom-form-date d-inline'
								type='number'
								placeholder='DD'
								min='1'
								max='31'
								name='day'
								onChange={e => this.handleChange(e)}
								required={true}
							/>
							<Form.Control
								className='custom-form custom-form-date d-inline'
								type='number'
								placeholder='MM'
								min='1'
								max='12'
								name='month'
								onChange={e => this.handleChange(e)}
								required={true}
							/>
							<Form.Control
								className='custom-form custom-form-date-year d-inline'
								type='number'
								placeholder='YYYY'
								min='1900'
								max='2021'
								name='year'
								onChange={e => this.handleChange(e)}
								required={true}
							/>
						</div>
					</Form.Group>

					<Form.Group className='mb-5'>
						<Form.Label>
							<p className='mb-0'>¿Cuál es tu nacionalidad?</p>
						</Form.Label>
						<Form.Control
							className='custom-form'
							type='text'
							placeholder='Española'
							name='nationality'
							onChange={e => this.handleChange(e)}
							required={true}
						/>
					</Form.Group>

					<Form.Group className='mb-5'>
						<Form.Label>
							<p className='mb-0'>¿En qué Comunidad Autónoma vives?</p>
						</Form.Label>
						<Form.Control
							className='custom-form'
							type='text'
							placeholder='E.g. Cataluña'
							name='region'
							onChange={e => this.handleChange(e)}
							required={true}
						/>
					</Form.Group>

					<Form.Group className='mb-5'>
						<Form.Label>
							<p className='mb-0'>Con una nota media de</p>
							<small>Dinos tu nota sobre 10</small>
						</Form.Label>
						<Form.Control
							className='custom-form'
							type='number'
							placeholder='E.g. 10'
							min='0'
							max='10'
							name='averageScore'
							onChange={e => this.handleChange(e)}
							required={true}
						/>
					</Form.Group>

					<div className='d-grid gap-2'>
						<Button className='padding-button custom-button' variant='primary' type='submit'>
							SIGUIENTE
						</Button>
					</div>
				</Form>
			</Container>
		)
	}
}
