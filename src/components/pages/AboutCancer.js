import React from "react";
import "../css/AboutCancer.css";

const AboutCancer = () => {
	return (
		<div>
			<div className="container1">
				<div className="description">
					<h1>
						What is <span style={{ color: "red" }}>Cancer?</span>
					</h1>
					<p className="para">
						In simple terms, cancer is an abnormal growth of body
						cells. Each one of us is born with a potential for cancer.
						One cannot "Catch" it as one would an infection or a cold.
						When the programming of a cell or a group of cells is
						affected, growth may become uncontrolled. Some of the
						factors that can alter the code are chronic irritation,
						tobacco, smoke and dust, radioactive substances, age, sex,
						race and heredity. While one cannot control many of these
						factors , we need to be aware of the ones we can control
						of. Prevention is definitely better than treatment of
						cancer.
					</p>
					<p className="para">
						Cancer can start almost anywhere in the human body, which
						is made up of trillions of cells. Normally, human cells
						grow and multiply (through a process called cell division)
						to form new cells as the body needs them. When cells grow
						old or become damaged, they die, and new cells take their
						place.
					</p>
					<p className="para">
						Sometimes this orderly process breaks down, and abnormal
						or damaged cells grow and multiply when they shouldn’t.
						These cells may form tumors, which are lumps of tissue.
						Tumors can be cancerous or not cancerous (benign).{" "}
					</p>
					<p className="para">
						Cancerous tumors spread into, or invade, nearby tissues
						and can travel to distant places in the body to form new
						tumors (a process called metastasis). Cancerous tumors may
						also be called malignant tumors. Many cancers form solid
						tumors, but cancers of the blood, such as leukemias,
						generally do not.
					</p>
					<p className="para">
						Benign tumors do not spread into, or invade, nearby
						tissues. When removed, benign tumors usually don’t grow
						back, whereas cancerous tumors sometimes do. Benign tumors
						can sometimes be quite large, however. Some can cause
						serious symptoms or be life threatening, such as benign
						tumors in the brain.
					</p>
				</div>
				<iframe
					style={{ marginTop: "50px" }}
					width="600"
					height="350"
					src="https://www.youtube.com/embed/LEpTTolebqo"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div className="container2">
				<img
					src="https://www.indiancancersociety.org/cancer-information/img/danger-signal.jpg"
					alt=""
				/>
				<div>
					<h2 style={{ fontWeight: "lighter", marginBottom: "8px" }}>
						Danger <span style={{ color: "red" }}>Signals</span>
					</h2>
					<ul>
						<li className="para">
							A persistent sore especially if it is in the mouth, on
							the lip or on tongue. Long standing sores due to
							smoking, sharp edge of teeth, or dental plates that do
							not fit, can develop into cancer if not taken care of.
							Common 'Cold Sore' disappears after a few days - Cancer
							does not. If any such sore persists more than a few
							days, see your doctor.
						</li>
						<li className="para">
							Lumps or masses which appear where none were present
							previously should arouse suspicion of cancer. This is
							especially true in the case of women and is the most
							readily cured if treated early.
						</li>
						<li className="para">
							Persistent indigestion or change in bowel habits, while
							usually due to other causes, are often caused in the
							intestinal tract and should be reported.
						</li>
						<li className="para">
							Unexplained or abnormal bleeding from anybody opening
							should be quickly investigated by a physician. Coughing
							up or vomiting blood, passing blood in the urine and
							rectal bleeding are common symptoms of cancer. In women
							the first sign of cancer of the uterus is often a bloody
							discharge occurring between menstrual periods or after
							menopause.
						</li>
						<li className="para">
							Persistent hoarseness or cough of abnormal duration
							deserves a careful examination by your doctor. Cancer of
							the larynx (voice box) or respiratory passages or lung
							may be the cause.
						</li>
						<li className="para">
							Unexplained loss of weight may be due to many things but
							may also be due to hidden cancer.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutCancer;
