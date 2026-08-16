# SecureTheCloud Recruiting Intake Governance

## Purpose

This document defines the SecureTheCloud recruiting intake model for candidate resume handling, portfolio review, access control, retention, deletion, and future Google Drive resume intake.

SecureTheCloud does not accept resume file uploads through the public website. The careers form collects candidate interest and may collect a resume, LinkedIn, GitHub, portfolio, or personal website link.

When SecureTheCloud reaches active hiring maturity, candidate resume files may be collected through a restricted Google Drive intake folder.

---

## Current Website Intake Model

Current public careers intake:

- Candidate submits interest through `/careers/join`.
- Candidate provides a resume, LinkedIn, GitHub, portfolio, or personal website link.
- No resume files are uploaded to the website.
- No resume files are stored in GitHub.
- No resume files are stored in Cloudflare Pages.
- No resume files are stored in the static application filesystem.

Current form data may be transmitted through the configured form provider. Recruiting submissions must be reviewed and removed from the form provider when no longer needed.

---

## Future Google Drive Intake Model

When resume file collection becomes necessary, SecureTheCloud will use a restricted Google Drive folder controlled by the SecureTheCloud workspace account.

Recommended folder structure:

```text
SecureTheCloud Recruiting/
  01 - Candidate Intake/
    2026/
      Lead Enterprise AI Security Architect/
      Cloud Governance Architect/
      Secure AI Engineer/
      AI Governance Consultant/
      Healthcare AI Workflow Architect/

  02 - Reviewed Candidates/
  03 - Interview Stage/
  04 - Selected Candidates/
  05 - Archived - Not Selected/
  06 - Delete Requests/

The public website should continue using resume and portfolio links by default. File upload links should only be shared with candidates who are moving into a recruiting stage that requires resume file collection.

Candidate File Naming Convention

Use a consistent naming format for candidate-uploaded files:

YYYY-MM-DD_LastName_FirstName_RoleTrack_DocumentType.pdf

Examples:

2026-08-15_Doe_Jane_AI-Security-Architect_Resume.pdf
2026-08-15_Doe_Jane_Secure-AI-Engineer_Portfolio.pdf

Do not use filenames that include sensitive notes, rejection reasons, compensation details, protected health information, or unnecessary personal attributes.

Access Control Policy

Google Drive recruiting folders must be restricted.

Minimum access model:

Owner: SecureTheCloud workspace administrator or recruiting owner.
Editor access: recruiting owner only.
Viewer access: approved hiring reviewers only.
Public links: disabled.
Anyone-with-link sharing: disabled.
External sharing: restricted unless explicitly approved.
Download, print, and copy controls: limited where available.
Access review: perform periodically during active recruiting.

Candidate materials must not be copied into public repositories, screenshots, personal drives, unmanaged folders, shared chat tools, or unrelated project folders.

Candidate Data Minimization

Only collect what is needed for recruiting review.

Allowed candidate information:

Full name
Email
Current role
Location or remote preference
LinkedIn profile
GitHub, portfolio, or personal website
Resume link or resume file when requested
Role interest
Experience summary
Availability
Candidate-provided interest statement

Do not request or store:

Passwords
Credentials
Social Security numbers
Financial account details
Protected health information
Immigration documents unless a later formal HR process requires them
Background-check documents unless a later formal HR process requires them
Unnecessary sensitive personal information
Resume Retention and Deletion Policy

SecureTheCloud's recruiting posture is deletion-first.

If a candidate is not selected:

Delete the candidate resume file from Google Drive once the candidate is marked not selected.
Delete duplicate resume copies from intake, reviewed, interview, and archived folders.
Delete resume attachments or copies from email where operationally practical.
Delete the candidate's form-provider submission when no longer needed for recruiting follow-up.
Do not retain rejected-candidate resumes for general future use unless the candidate has explicitly asked to remain in the talent network.

If a candidate asks to be removed:

Delete the resume file.
Delete duplicate copies.
Delete the form submission where available.
Confirm the deletion request has been completed when practical.

If a candidate is selected:

Move necessary hiring materials into the selected-candidate folder.
Transfer required onboarding materials into the appropriate HR or business process when available.
Do not keep unnecessary duplicate files in recruiting intake folders.
Not-Selected Candidate Workflow

Recommended workflow:

Candidate enters intake.
Candidate is reviewed.
Candidate is either advanced, held for future conversation with consent, selected, or not selected.
If not selected, delete resume files once the decision is final.
Remove duplicate files and stale form-provider submissions.
Keep only minimal operational notes if necessary, without retaining the resume file.
Delete Request Workflow

If a candidate requests deletion:

Locate the candidate record in the form provider.
Locate any resume files in Google Drive.
Locate duplicate copies in recruiting folders.
Delete candidate resume files and unnecessary recruiting records.
Record that the deletion request was completed if an internal log exists.
Do not re-upload or re-create the candidate file unless the candidate submits again.
Public Website Notice

The careers site should clearly disclose:

The careers form is for talent interest.
Resume files are not uploaded through the website.
Candidate-provided information is used for recruiting review.
Future resume file collection may use restricted Google Drive intake.
Resume files are deleted when a candidate is not selected.
Candidates should not submit passwords, credentials, PHI, or highly sensitive production data.
Governance Status

This document is operational governance for SecureTheCloud recruiting intake. It is not a substitute for legal advice, an employment policy manual, or a full HR compliance program.
