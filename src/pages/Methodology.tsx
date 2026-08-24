import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  Binary,
  BookOpen,
  CheckCircle2,
  Database,
  ExternalLink,
  GraduationCap,
  ShieldAlert,
} from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';

const fodmapTypes = ['Fructanes', 'Galactanes', 'Lactose', 'Fructose', 'Mannitol', 'Sorbitol'];

const auditedImprovements = [
  {
    title: 'Modélisation des données',
    description:
      'Jade a appris à distinguer les réponses du profil, les familles FODMAP enregistrées sur chaque aliment et les métadonnées qui ne participent pas à la comparaison.',
  },
  {
    title: 'État et persistance',
    description:
      'Le profil est enregistré dans le stockage local du navigateur, relu au chargement, validé avant utilisation et restauré dans le formulaire.',
  },
  {
    title: 'Accessibilité',
    description:
      'L’audit a conduit à améliorer les contrastes, le mouvement réduit, la progression du profil, les annonces de résultats, les états vides et le focus après un changement de page.',
  },
  {
    title: 'Tests et communication',
    description:
      'Des tests couvrent la structure des 104 enregistrements, les 64 combinaisons du profil binaire, la persistance et les états d’erreur. Le vocabulaire a aussi été rendu relatif au profil et moins affirmatif.',
  },
];

export default function Methodology() {
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader>
        <Link
          to='/'
          className='inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          aria-label='Retour à l’accueil'
        >
          <ArrowLeft className='h-4 w-4' aria-hidden='true' />
          <span className='sr-only sm:not-sr-only'>Accueil</span>
        </Link>
      </SiteHeader>

      <main className='flex-1'>
        <section className='bg-primary-900 text-white'>
          <div className='mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20'>
            <div className='mb-5 inline-flex items-center gap-2 rounded-md border border-primary-700 bg-primary-800 px-3 py-1.5 text-sm font-semibold text-primary-100'>
              <GraduationCap className='h-4 w-4' aria-hidden='true' />
              Projet portfolio éducatif
            </div>
            <h1 className='font-editorial max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl'>
              Méthodologie et limites
            </h1>
            <p className='mt-6 max-w-3xl text-lg leading-8 text-primary-100'>
              MonGuide FODMAP est le projet frontend junior de Jade, réalisé à la fin de son
              parcours d’apprentissage en autodidacte. Il montre comment elle a conçu, testé et
              audité une interface responsable autour d’un sujet sensible. Ce n’est pas un produit
              clinique.
            </p>
          </div>
        </section>

        <div className='mx-auto max-w-5xl space-y-14 px-4 py-12 sm:px-6 sm:py-16'>
          <section
            aria-labelledby='non-medical-title'
            className='border-l-2 border-caution bg-caution/10 p-6 sm:p-8'
          >
            <div className='flex items-start gap-4'>
              <ShieldAlert className='mt-1 h-6 w-6 shrink-0 text-caution' aria-hidden='true' />
              <div className='max-w-3xl'>
                <h2 id='non-medical-title' className='text-xl font-semibold text-foreground'>
                  Une aide de lecture, pas un avis médical
                </h2>
                <p className='mt-3 leading-7 text-muted-foreground'>
                  L’application ne diagnostique rien, ne prescrit aucun régime et ne garantit pas
                  qu’un aliment ou une quantité sera toléré. Les résultats comparent uniquement des
                  données enregistrées avec un profil déclaré. Une situation personnelle doit être
                  discutée avec un professionnel de santé qualifié.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby='comparison-title'>
            <div className='mb-5 flex items-center gap-3'>
              <Binary className='h-6 w-6 text-primary' aria-hidden='true' />
              <h2
                id='comparison-title'
                className='font-editorial text-3xl font-semibold text-foreground'
              >
                Comment fonctionne la comparaison
              </h2>
            </div>
            <div className='max-w-3xl space-y-5 leading-7 text-muted-foreground'>
              <p>
                Le profil v1 comporte exactement six réponses binaires : « je tolère » ou « j’évite
                » pour chacune des catégories suivantes.
              </p>
              <ul className='flex flex-wrap gap-2' aria-label='Les six catégories FODMAP du profil'>
                {fodmapTypes.map((type) => (
                  <li
                    key={type}
                    className='rounded-md border border-border bg-card px-3 py-1 text-sm font-medium text-foreground'
                  >
                    {type}
                  </li>
                ))}
              </ul>
              <p>
                Pour chaque aliment, l’Explorateur compare toutes les familles FODMAP enregistrées
                avec celles marquées « à éviter » dans le profil. Si au moins une famille
                correspond, il affiche « FODMAP évité détecté ». Sinon, il affiche « Aucun FODMAP
                évité détecté ».
              </p>
              <div className='rounded-lg border border-border bg-card p-5 text-foreground'>
                <strong>Exemple :</strong> si le lactose est marqué « à éviter », un aliment auquel
                l’étiquette « lactose » est attachée sera signalé. Cette règle ne tient compte ni du
                nombre de grammes, ni du statut principal ou secondaire de l’étiquette, ni d’une
                tolérance personnelle observée.
              </div>
              <p>
                Les grammes affichés sont des <strong>portions de référence</strong> du jeu de
                données. Ils ne constituent ni un seuil individuel, ni une promesse de tolérance.
              </p>
            </div>
          </section>

          <section aria-labelledby='evidence-title'>
            <div className='mb-5 flex items-center gap-3'>
              <Database className='h-6 w-6 text-primary' aria-hidden='true' />
              <h2
                id='evidence-title'
                className='font-editorial text-3xl font-semibold text-foreground'
              >
                Ce qui est vérifié, et ce qui ne l’est pas
              </h2>
            </div>
            <div className='grid gap-5 md:grid-cols-2'>
              <article className='rounded-lg border border-success/30 bg-success/5 p-6'>
                <div className='flex items-center gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-success' aria-hidden='true' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Preuves d’ingénierie vérifiées
                  </h3>
                </div>
                <ul className='mt-4 list-disc space-y-3 pl-5 leading-7 text-muted-foreground'>
                  <li>
                    Le tableau local contient 104 enregistrements et 104 identifiants uniques.
                  </li>
                  <li>
                    Les tests vérifient les champs requis, les valeurs en grammes positives, les
                    dates, catégories, niveaux de confiance et étiquettes FODMAP autorisés.
                  </li>
                  <li>
                    Les tests vérifient la règle de comparaison pour les 64 profils binaires
                    possibles.
                  </li>
                  <li>
                    Le profil est sérialisé dans le navigateur avec une version de stockage et
                    validé avant d’être utilisé.
                  </li>
                </ul>
              </article>

              <article className='rounded-lg border border-caution/40 bg-caution/10 p-6'>
                <div className='flex items-center gap-3'>
                  <ShieldAlert className='h-5 w-5 text-caution' aria-hidden='true' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Origine des données non vérifiée
                  </h3>
                </div>
                <div className='mt-4 space-y-3 leading-7 text-muted-foreground'>
                  <p>
                    Selon le propriétaire du projet, le jeu local a été assemblé à partir
                    d’informations FODMAP accessibles publiquement en ligne.
                  </p>
                  <p>
                    Le relevé source par source de l’acquisition et des transformations n’a pas été
                    conservé. Les 104 entrées n’ont pas été validées cliniquement de façon
                    indépendante pour ce projet.
                  </p>
                  <p>
                    Les mentions de source présentes dans les enregistrements ne prouvent à elles
                    seules ni l’origine exacte, ni l’exactitude, ni un droit de réutilisation.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section aria-labelledby='persistence-title'>
            <h2
              id='persistence-title'
              className='font-editorial text-3xl font-semibold text-foreground'
            >
              Persistance du profil
            </h2>
            <p className='mt-4 max-w-3xl leading-7 text-muted-foreground'>
              Les six réponses et leurs dates sont conservées dans le stockage local du navigateur,
              sans création de compte. Le code contrôle la forme du profil avant de le restaurer et
              migre l’ancien format local vers l’enveloppe versionnée actuelle. Les données peuvent
              disparaître si le stockage du navigateur est effacé ou indisponible.
            </p>
          </section>

          <section aria-labelledby='learning-title'>
            <h2
              id='learning-title'
              className='font-editorial text-3xl font-semibold text-foreground'
            >
              Ce que Jade a appris et amélioré
            </h2>
            <div className='mt-5 grid gap-4 sm:grid-cols-2'>
              {auditedImprovements.map((item) => (
                <article key={item.title} className='rounded-lg border border-border bg-card p-5'>
                  <h3 className='font-semibold text-foreground'>{item.title}</h3>
                  <p className='mt-2 leading-7 text-muted-foreground'>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby='further-reading-title'>
            <div className='mb-4 flex items-center gap-3'>
              <BookOpen className='h-6 w-6 text-primary' aria-hidden='true' />
              <h2
                id='further-reading-title'
                className='font-editorial text-3xl font-semibold text-foreground'
              >
                Limites et lecture complémentaire
              </h2>
            </div>
            <div className='max-w-3xl space-y-4 leading-7 text-muted-foreground'>
              <p>
                Le jeu de données du projet ne doit pas être présenté comme un jeu officiel de
                Monash University. MonGuide FODMAP n’est ni affilié, ni approuvé, ni certifié par
                Monash University, et ne revendique aucune autorisation de réutilisation de sa part.
              </p>
              <p>
                Pour une information éducative générale indépendante du jeu local, consultez la{' '}
                <a
                  href='https://www.monashfodmap.com/about-fodmap-and-ibs/high-and-low-fodmap-foods/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                >
                  liste publique d’exemples de Monash University
                  <ExternalLink className='h-4 w-4' aria-hidden='true' />
                </a>
                . Ce lien est proposé comme lecture complémentaire, pas comme preuve de provenance
                des 104 enregistrements.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
