'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './Button';
import { Loader2, CheckCircle2 } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Veuillez entrer une adresse email valide'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailFormProps {
  variant?: 'default' | 'large';
  showBenefits?: boolean;
}

export function EmailForm({ variant = 'default', showBenefits = true }: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    
    // TODO: Connecter à votre service d'email (Mailchimp, ConvertKit, etc.)
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Email submitted:', data.email);
      setIsSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center gap-2 text-success">
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-medium">Merci ! Vous recevrez un email de confirmation.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className={variant === 'large' ? 'flex flex-col gap-6' : 'flex flex-col sm:flex-row gap-3 items-stretch'}>
        <div className="flex-1">
          <input
            type="email"
            placeholder="Votre adresse email"
            {...register('email')}
            className={`w-full rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
              errors.email
                ? 'border-error focus:ring-error'
                : 'border-gray-200 focus:border-primary-500'
            } ${variant === 'large' ? 'px-6 py-5 text-lg' : 'px-5 py-3.5 text-base'} font-medium bg-white`}
            style={{
              boxShadow: errors.email 
                ? '0 0 0 2px rgba(239, 68, 68, 0.1)' 
                : '0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            }}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-3 text-sm text-error font-semibold">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size={variant === 'large' ? 'lg' : 'md'}
          className={variant === 'large' ? 'w-full py-5 text-lg font-bold rounded-xl' : 'whitespace-nowrap sm:w-auto rounded-xl'}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Envoi...
            </>
          ) : (
            'Rejoindre'
          )}
        </Button>
      </div>
      
      {showBenefits && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-base">
            <div 
              className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border-2 border-white/30"
            >
              <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span 
              className="font-semibold text-white"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Accès prioritaire au lancement
            </span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <div 
              className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border-2 border-white/30"
            >
              <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span 
              className="font-semibold text-white"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Tarif préférentiel (-30%)
            </span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <div 
              className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border-2 border-white/30"
            >
              <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span 
              className="font-semibold text-white"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Essai gratuit 14 jours
            </span>
          </div>
        </div>
      )}
      
      <p 
        className="mt-8 text-sm text-white/80 text-center font-medium leading-relaxed"
        style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}
      >
        100% gratuit. Pas de spam. Désinscription à tout moment.
      </p>
    </form>
  );
}

