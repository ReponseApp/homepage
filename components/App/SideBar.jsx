import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCreatingGuild } from "../../actions/setCreatingGuild";
import { useEffect } from 'react';

function SideBar(props) {
	let [currentStatus, setCurrentStatus] = useState(props.user.status),
		[statusColor, setStatusColor] = useState('green'),
		[statusIconName, setStatusIconName] = useState('circle'),
		[category, setCategory] = useState("Direct Messages"),
		[statusScreenIsOpen, setStatusScreen] = useState(false),
		dms = [];

	const { setCreatingGuild } = props;

	useEffect(() => {
		updateStatus();
	})

	return (
		<div className="m-0 p-0 flex h-screen w-[12.5%]" id="main">
			<div
				id="sidebar"
				className="bg-dark-300 w-1/2 h-screen flex flex-col justify-between items-center space-y-3"
			>
				<div>
					<button
						onClick={() => setStatusScreen(!statusScreenIsOpen)}
						data-tip={`${props.user.username}#${props.user.discrim}`}
						className='border-5 border-red-400 w-12 h-12 rounded-full flex justify-center items-center'
					>
						<div className="relative my-2">
							<img
								src={props.user.avatarURL}
								className="w-11 h-11 object-cover rounded-full select-none"
								draggable="false"
								alt="The User's Avatar URL"
							/>
							<div className="absolute bottom-1 right-1 w-3 h-3 rounded-full">
								<span className={"material-icons text-sm text-" + statusColor + "-400"}>{statusIconName}</span>
							</div>
						</div>
					</button>
					<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
				</div>
				{statusScreenIsOpen === true && (
					<div id='status-screen' className="text-white select-none w-40 h-50 bg-dark-400 fixed left-16 top-16 rounded-xl flex flex-col pt-5 items-center" onClick={() => {statusScreenIsOpen && setStatusScreen(!statusScreenIsOpen) && updateStatus()}}>
						<div id='online' className='hover:bg-green-600 w-[90%] h-[15%] mb-1 cursor-pointer hover:rounded-lg flex items-center pl-2' onClick={() => { setCurrentStatus('online'); }}>
							<span className="material-icons text-green-400 text-sm">circle</span>
							<span className='ml-2'>Online</span>
						</div>

						<hr />

						<div id='idle' className='hover:bg-green-600 w-[90%] h-[15%] cursor-pointer hover:rounded-lg flex items-center pl-2' onClick={() => { setCurrentStatus('idle'); }}>
							<span className="material-icons  text-yellow-400 text-sm">dark_mode</span>
							<span className='ml-2'>Idle</span>
						</div>


						<div id='dnd' className='hover:bg-green-600 w-[90%] h-[15%] cursor-pointer hover:rounded-lg flex items-center pl-2' onClick={() => setCurrentStatus('dnd')}>
							<span className="material-icons text-red-400 text-sm">do_not_disturb_on</span>
							<span className='ml-2'>Do Not Disturb</span>
						</div>


						<div id='offline' className='hover:bg-green-400 w-[90%] h-[15%] cursor-pointer hover:rounded-lg flex items-center pl-2' onClick={() => { setCurrentStatus('offline'); }}>
							<span className="material-icons text-gray-400 text-sm">trip_origin</span>
							<span className='ml-2'>Invisible</span>
						</div>

					</div>
				)}

				<div className="space-y-5 m-0 p-0">
					<center>
						<button data-tip="Create Guild" onClick={() => setCreatingGuild(true)}>
							<i className="fas fa-plus-circle text-white text-4xl" />
						</button>
						<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
					</center>

					<center>
						<button
							data-tip="Direct Messages"
							id="dms"
							onClick={() => setCategory('Direct Messages')}
						>
							<i className="fas fa-user text-white text-4xl" />
						</button>
						<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
					</center>

					<center>
						<button
							data-tip="Community Servers"
							id="guilds"
							onClick={() => setCategory('Servers')}
						>
							<i className="fas fa-users text-white text-4xl" />
						</button>
						<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
					</center>

					<center>
						<button data-tip="Settings" id="app-settings" onClick={openSettings}>
							<i className="fas fa-cog text-white text-4xl" />
						</button>
						<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
					</center>
				</div>

				<div>
					<a data-tip="Logout" className="pt-3" href="https://reponseapp.xyz">
						<i className="fas fa-sign-out-alt text-white text-4xl text-red-500" />
					</a>
					<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
				</div>
			</div>
			<div className="w-1/2">
				{category === 'Servers' && (
					<div className="overflow-y-scroll guilds w-full h-screen bg-dark-200 flex flex-col items-center">
						{props.user.servers.map((item, i) => (
							<div key={i} onContextMenu={(e) => { e.preventDefault(); console.log("41") }}>
								<img
									data-tip={item.guildName}
									src={item.icon}
									id={item.id}
									className="guild-icon rounded-full mt-1 mb-2 w-12 h-12 min-w-12 min-h-12 object-cover select-none"
									alt="Guild Icon"
									draggable="false"
								/>
								<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
							</div>
						))}
					</div>
				)}

				{category === 'Direct Messages' && (
					<div className="overflow-y-scroll guilds w-full bg-dark-200 h-screen">
						{dms.map((item, i) => (
							<div key={i}>
								<center>
									<Link to={"/app/direct/" + props.user.id}>
										<img
											data-tip={item.guildName}
											src={item.icon}
											id={item.id}
											className="guild-icon rounded-full mt-1 mb-2 w-12 h-12 object-cover select-none"
											alt="Guild Icon"
										/>
									</Link>
									<ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#111" />
								</center>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);

	function updateStatus() {
		switch (currentStatus) {
			case 'online':
				setStatusColor('green');
				setStatusIconName('circle');
				break;
			case 'idle':
				setStatusColor('yellow');
				setStatusIconName('dark_mode');
				break;
			case 'dnd':
				setStatusColor('red');
				setStatusIconName('do_not_disturb_on');
				break;
			case 'offline':
				setStatusColor('gray');
				setStatusIconName('trip_origin');
				break;
			default:
				setStatusColor('green');
				setStatusIconName('circle');
		}
	}

	function openSettings() {
		props.settingsEditing(true);
	}
}

function mapStateToProps(state) {
	return state
}

const mapActionsToProps = () => ({ setCreatingGuild })

export default connect(
	mapStateToProps,
	mapActionsToProps()
)(SideBar)