import React from "react";
import { connect } from "react-redux";

function MemberList(props) {

    const memberSize = 1

        return (
            <div>
                <div
                    className="h-screen bg-dark-200 justify-end overflow-y-auto"
                    id="member-list"
                    style={{ width: "14.9rem", backgroundColor: "#323232" }}
                >
                    <p className="text-center text-gray-400 text-sm pt-2 select-none">
                        <strong>Members — {memberSize}</strong>
                    </p>
                    <div v-for="member in membersize" key="member">
                        <center>
                            <div
                                className="flex rounded-2xl transition duration-200 mt-1 cursor-pointer items-center hover:bg-dark-50"
                                id="member"
                                click="openInfo"
                                style={{ width: "14rem" }}
                            >
                                <div className="relative my-2">
                                    <img
                                        src={props.user.avatarURL}
                                        className="w-12 h-12 object-cover rounded-full ml-3 select-none"
                                        alt=""
                                    />
                                    <div
                                        className={
                                            "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400"
                                        }
                                    ></div>
                                </div>
                                <p
                                    className="text-white pl-2 select-none"
                                    id="member-name"
                                >
                                    <strong>{props.user.username}</strong>
                                </p>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
}

function mapStateToProps(state) {
	return state
}

export default connect(
	mapStateToProps
)(MemberList)