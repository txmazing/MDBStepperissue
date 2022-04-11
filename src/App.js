/* Components */
import {
	MDBBtn,
	MDBCol,
	MDBRow,
	MDBInput,
	MDBStepper,
	MDBStepperContent,
	MDBStepperStep,
	MDBStepperHead,
	MDBContainer,
} from "mdb-react-ui-kit";

/* React */
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/* Code */
export const APP_ID = process.env.REACT_APP_REALM_APP_ID;

export default function App() {
	const [btnStepper, setBtnStepper] = useState(1);
	const [prevBtnStepper, setPrevBtnStepper] = useState(0);
	return (
		<MDBContainer>
			<MDBStepper
				className='bg-secondary-bright rounded-6 text-white'
				verticalBreakpoint={768}
				mobileBreakpoint={576}
				outerState={btnStepper}
				setOuterState={setBtnStepper}
				prevOuterState={prevBtnStepper}
				setPrevOuterState={setPrevBtnStepper}
			>
				<MDBStepperStep itemId={1}>
					<MDBStepperHead icon='1' text='stepperstep1' className='pe-none' />
					<MDBStepperContent>
						<MDBRow>
							<MDBCol className='bg-secondary-brighter rounded-6 mb-5'>
								<MDBBtn
									className='my-3'
									onClick={() => {
										btnStepper !== 1 && setPrevBtnStepper(btnStepper);
										btnStepper >= 2 && setBtnStepper(btnStepper - 1);
									}}
								>
									Back
								</MDBBtn>
							</MDBCol>
							<MDBCol md={6}>
								<MDBRow>
									<MDBCol className='bg-secondary-brighter rounded-6'>
										<MDBBtn
											onClick={() => {
												btnStepper !== 4 && setPrevBtnStepper(btnStepper);
												btnStepper <= 2 && setBtnStepper(btnStepper + 1);
											}}
											className='my-5'
										>
											Next
										</MDBBtn>
									</MDBCol>
								</MDBRow>
							</MDBCol>
						</MDBRow>
					</MDBStepperContent>
				</MDBStepperStep>
				<MDBStepperStep itemId={2}>
					<MDBStepperHead icon='2' text='stepperstep2' className='pe-none' />
					<MDBStepperContent>
						<MDBRow>
							<MDBCol className='bg-secondary-brighter rounded-6 mb-5'>
								<MDBBtn
									className='my-3'
									onClick={() => {
										btnStepper !== 1 && setPrevBtnStepper(btnStepper);
										btnStepper >= 2 && setBtnStepper(btnStepper - 1);
									}}
								>
									Back
								</MDBBtn>
							</MDBCol>
							<MDBCol md={6}>
								<MDBRow>
									<MDBCol className='bg-secondary-brighter rounded-6'>
										<MDBBtn
											onClick={() => {
												btnStepper !== 4 && setPrevBtnStepper(btnStepper);
												btnStepper <= 2 && setBtnStepper(btnStepper + 1);
											}}
											className='my-5'
										>
											Next
										</MDBBtn>
									</MDBCol>
								</MDBRow>
							</MDBCol>
						</MDBRow>
					</MDBStepperContent>
				</MDBStepperStep>
				<MDBStepperStep itemId={3}>
					<MDBStepperHead icon='3' text='stepperstep3' className='pe-none' />
					<MDBStepperContent>
						<MDBRow>
							<MDBCol className='bg-secondary-brighter rounded-6 mb-5'>
								<MDBBtn
									className='my-3'
									onClick={() => {
										btnStepper !== 1 && setPrevBtnStepper(btnStepper);
										btnStepper >= 2 && setBtnStepper(btnStepper - 1);
									}}
								>
									Back
								</MDBBtn>
							</MDBCol>
							<MDBCol md={6}>
								<MDBRow>
									<MDBCol className='bg-secondary-brighter rounded-6'>
										<MDBBtn
											onClick={() => {
												btnStepper !== 4 && setPrevBtnStepper(btnStepper);
												btnStepper <= 3 && setBtnStepper(btnStepper + 1);
											}}
											className='my-5'
										>
											Next
										</MDBBtn>
									</MDBCol>
								</MDBRow>
							</MDBCol>
						</MDBRow>
					</MDBStepperContent>
				</MDBStepperStep>
				<MDBStepperStep itemId={4}>
					<MDBStepperHead icon='4' text='stepperstep4' className='pe-none' />
					<MDBStepperContent>
						<MDBRow>
							<MDBCol className='bg-secondary-brighter rounded-6 mb-5'>
								<MDBBtn
									className='my-3'
									onClick={() => {
										btnStepper !== 1 && setPrevBtnStepper(btnStepper);
										btnStepper >= 2 && setBtnStepper(btnStepper - 1);
									}}
								>
									Back
								</MDBBtn>
							</MDBCol>
							<MDBCol md={6}>
								<MDBRow>
									<MDBCol className='bg-secondary-brighter rounded-6'>
										<MDBBtn
											onClick={() => {
												btnStepper !== 4 && setPrevBtnStepper(btnStepper);
												btnStepper <= 3 && setBtnStepper(btnStepper + 1);
											}}
											className='my-5'
										>
											Next
										</MDBBtn>
									</MDBCol>
								</MDBRow>
							</MDBCol>
						</MDBRow>
					</MDBStepperContent>
				</MDBStepperStep>
			</MDBStepper>
		</MDBContainer>
	);
}
