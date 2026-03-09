<script>
import emailjs from '@emailjs/browser';
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';

emailjs.init('Public_key');

export default {
	components: { Button, FormInput, FormTextarea },
	data() {
		return {
			form: {
				name: '',
				email: '',
				subject: '',
				message: '',
			},
			isSubmitting: false,
			successMessage: null,
			errorMessage: null,
		};
	},
	methods: {
		async sendEmail(e) {
			e.preventDefault();
			this.isSubmitting = true;
			this.successMessage = null;
			this.errorMessage = null;

			try {
				await emailjs.send(
					'Service_id',
					'Template_id', 
					{
						from_name: this.form.name,
						from_email: this.form.email,
						subject: this.form.subject,
						message: this.form.message,
						to_email: 'ciolkowskiyannpro@gmail.com',
					}
				);

				this.successMessage = 'Email envoyé avec succès !';
				this.form = { name: '', email: '', subject: '', message: '' };
			} catch (error) {
				this.errorMessage = 'Erreur lors de l\'envoi. Veuillez réessayer.';
				console.error('Error:', error);
			} finally {
				this.isSubmitting = false;
			}
		},
	},
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Formulaire de contact
			</p>

			<!-- Success Message -->
			<div v-if="successMessage" class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
				{{ successMessage }}
			</div>

			<!-- Error Message -->
			<div v-if="errorMessage" class="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
				{{ errorMessage }}
			</div>

			<form @submit="sendEmail" class="font-general-regular space-y-7">
				<FormInput
					v-model="form.name"
					label="Nom/Prénom"
					inputIdentifier="name"
				/>
				<FormInput
					v-model="form.email"
					label="Email"
					inputIdentifier="email"
					inputType="email"
				/>
				<FormInput
					v-model="form.subject"
					label="Objet"
					inputIdentifier="subject"
				/>
				<FormTextarea
					v-model="form.message"
					label="Description"
					textareaIdentifier="message"
				/>

				<div>
					<Button
						title="Envoyer"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						:disabled="isSubmitting"
						aria-label="Send Message"
					/>
					<span v-if="isSubmitting" class="ml-2 text-indigo-500">
						Envoi en cours...
					</span
					>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>