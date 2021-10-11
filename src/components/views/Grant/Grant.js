import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Grant.css'
import AllowedUsersService from '../../../services/AllowedUsersService'

export default class Grant extends Component {
	constructor(props) {
		super(props)

		this.state = {
			becaMadrid: false,
			becaCataluña: false,
			becaGalicia: false,
			becaAndalucia: false,
			name: null,
			error: false
		}
	}

	allowedUsersService = new AllowedUsersService()

	componentDidMount = () => {
		this.getUserName()
		this.getAge()
		this.checkGrant()
	}

	getUserName = () => {
		const { email } = this.props.currentUserEmail.user

		this.allowedUsersService
			.getAllUsers()
			.then(users => {
				users.data.map(
					elm => elm.email.toLowerCase() === email.toLowerCase() && this.setState({ name: elm.name })
				)
			})
			.then(() => !this.state.name && this.setState({ error: true }))
			.catch(err => console.log(err))
	}

	getAge = () => {
		let { day, month, year } = this.props.currentUserData.user
		month--
		const today = new Date()
		let age = today.getFullYear() - year
		const m = today.getMonth() - month
		if (m < 0 || (m === 0 && today.getDate() < day)) {
			age--
		}
		return age
	}

	checkGrant() {
		const age = this.getAge()
		const { region, averageScore } = this.props.currentUserData.user
		if (age >= 18 && region.toLowerCase() === 'madrid') {
			this.setState({
				...this.props,
				becaMadrid: true
			})
		} else if (age >= 18 && region.toLowerCase() === 'cataluña') {
			this.setState({
				...this.props,
				becaCataluña: true
			})
		} else if (region.toLowerCase() === 'galicia' && averageScore >= 5) {
			this.setState({
				...this.props,
				becaGalicia: true
			})
		} else if (region.toLowerCase() === 'andalucia' && averageScore >= 5) {
			this.setState({
				...this.props,
				becaAndalucia: true
			})
		}
	}

	render() {
		return (
			<Container>
				{!this.state.error ? (
					<div>
						<h1 className='mb-5'>
							Aquí tienes tus becas: <br /> {this.state.name}
						</h1>
						<div className='row justify-content-center'>
							<div className='col-10  grant-cards mb-5'>
								<h5>Becas escolares curso 2021 -2022 primer ciclo educación infantil.</h5>
								{this.state.becaMadrid ? (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center apto'>apto</span>
									</div>
								) : (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center no-apto'>no apto</span>
									</div>
								)}
							</div>
							<div className='col-10  grant-cards mb-5'>
								<h5>
									Becas para el estudio de Programas de Segunda Oportunidad, correspondiente al curso
									2021-2022
								</h5>
								{this.state.becaCataluña ? (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center apto'>apto</span>
									</div>
								) : (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center no-apto'>no apto</span>
									</div>
								)}
							</div>
							<div className='col-10  grant-cards mb-5'>
								<h5>
									Subvenciones de comedor en los centros docentes públicos no universitarios para el
									curso escolar 2021-2022.
								</h5>
								{this.state.becaGalicia ? (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center apto'>apto</span>
									</div>
								) : (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center no-apto'>no apto</span>
									</div>
								)}
							</div>
							<div className='col-10  grant-cards mb-5'>
								<h5>MEC</h5>
								{this.state.becaAndalucia ? (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center apto'>apto</span>
									</div>
								) : (
									<div className='text-center mb-4 mt-4'>
										<span className='text-center no-apto'>no apto</span>
									</div>
								)}
							</div>
						</div>
					</div>
				) : (
					<div>
						<h1>Lo sentimos, tu correo no aparece en nuestra base de datos. Comprueba tus datos</h1>
					</div>
				)}
			</Container>
		)
	}
}
