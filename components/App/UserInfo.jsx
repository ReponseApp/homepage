import React from "react";

export default function UserInfo(props) {
    return false ? (
        <div>
            <div
                id="user-back"
                className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-99"
                lick="close"
            >
                <div id="user" className="bg-dark-500 w-1/2 h-1/2 rounded-2xl p-8">
                    <img
                        src="avatarURL"
                        className="rounded-full select-none w-32"
                        id="user-avatar"
                        alt=""
                    />
                    <p
                        className="pt-3 select-none cursor-pointer"
                        click="copyUser"
                        title="Click To Copy"
                        id="user-tag"
                    >
                        <strong className="text-3xl text-white">
                            {/* { username } */}
                        </strong>{" "}
                        <span className="text-lg text-gray-200">
                            {" "}
                            #{/* { discrim } */}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    ) : (
        ""
    );

    /* function close(e) {
        if (e.target.id === "user-back") {
            return this.$emit("closeInfo", true);
        }
    } */

    /* function copyUser() {
        try {
            navigator.clipboard.writeText(`${this.username}#${this.discrim}`);
            alert("Successfully Copied!");
        } catch (error) {
            document.getElementById("user-tag").title = "An Error Accoured!";
        }
    } */
}
