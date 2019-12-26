import React, { Component } from 'react';
import { ShopConsumer } from '../context';

export class Contact extends Component {
	render() {
		return (
			<ShopConsumer>
				{(value) => {
					const { FormSubmit, formOnChange } = value;
					return (
						<div id='section-e'>
							<div className='wrapper'>
								<div className='leftContact'>
									<h1>Contact Us</h1>
									<ul>
										<li>
											<i className='far fa-clock'></i>
											<span>
												週二至週五
												<br />
												10:00AM-3:00PM
											</span>
										</li>
										<li>
											<i className='fas fa-phone'></i>
											<span>
												(02)2504-1461
												<br />
												0935213721
											</span>
										</li>
										<li>
											<i className='fas fa-envelope'></i>
											<span>
												aa087159@gmail.com
												<br />
												charity.li@msa.hinet.net
											</span>
										</li>
										<li>
											<i className='fas fa-map-marker-alt'></i>
											<span>
												台北市中山區建國北路二段186巷12號
											</span>
										</li>
									</ul>
								</div>
								<div className='rightContact'>
									<div className='alert'>
										Your message has been sent
									</div>
									<form
										id='contactForm'
										onSubmit={FormSubmit}
										method='POST'
									>
										<div className='form-group'>
											<label>姓名</label>
											<input
												onChange={formOnChange}
												type='text'
												id='name'
												className='form-control'
												placeholder='輸入您的全名'
												required
											/>
										</div>
										<div className='form-group'>
											<label>電子信箱</label>
											<input
												onChange={formOnChange}
												type='email'
												id='email'
												className='form-control'
												placeholder='name@example.com'
											/>
										</div>
										<div className='form-group'>
											<label>留言給我們</label>
											<textarea
												onChange={formOnChange}
												className='form-control'
												id='message'
												rows='3'
												required
											></textarea>
										</div>
										<button
											type='submit'
											className='btn btn-default submitButton'
										>
											傳送訊息
										</button>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</ShopConsumer>
		);
	}
}

export default Contact;
