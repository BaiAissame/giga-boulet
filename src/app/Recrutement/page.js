'use client'; // Composant côté client

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
} from '@mui/material';

export default function RecruitmentPage() {
  // Utilisation d'une vérification pour les actions côté client uniquement
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Rendu uniquement côté client (évite les erreurs de hydration)
  if (!isBrowser) return null;


  return (
    <>
      <Head>
        <meta
          name="description"
          content="Rejoignez l'équipe de Gigaboulet ! Postulez dès maintenant pour un poste chez Gigaboulet et démarrez une carrière passionnante. Découvrez nos opportunités et postulez en ligne."
        />
        <meta
          name="keywords"
          content="recrutement, offres d'emploi, rejoindre l'équipe, Gigaboulet, postuler"
        />
        <title>Recrutement chez Gigaboulet - Postulez pour rejoindre notre équipe</title>
      </Head>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            mt: 10,
            textAlign: 'center',
            py: 4,
            backgroundColor: '#e6f8f6',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: 'teal', fontWeight: 'bold', mb: 2 }}
          >
            Rejoignez notre équipe !
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Nous sommes toujours à la recherche de personnes talentueuses et motivées pour rejoindre notre équipe dynamique. Faites-nous parvenir vos coordonnées ainsi qu’un message de motivation en bas de cette page, et démarrez peut-être une belle aventure avec nous !
          </Typography>
          <Link href="/" passHref>
            <Button
              variant="outlined"
              sx={{
                marginTop: '20px',
                borderColor: 'teal',
                color: 'teal',
                '&:hover': { borderColor: '#006d6d', backgroundColor: '#e0f7f7' },
              }}
            >
              Retour à l'accueil
            </Button>
          </Link>
        </Box>

        {/* Section Description */}
        <Box sx={{ mt: 6 }}>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#f1faf9',
                  boxShadow: '0 4px 10px rgba(0, 128, 128, 0.2)',
                  borderRadius: 2,
                  padding: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: 'teal', fontWeight: 'bold', mb: 2 }}
                  >
                    Les différents postes chez <strong>Gigaboulet</strong>
                  </Typography>
                  <Typography variant="body1">
                    Nous offrons des opportunités pour les équipiers(ères),
                    managers et directeurs passionnés par leur métier. Vous aurez
                    la chance de grandir dans un environnement collaboratif.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#f1faf9',
                  boxShadow: '0 4px 10px rgba(0, 128, 128, 0.2)',
                  borderRadius: 2,
                  padding: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: 'teal', fontWeight: 'bold', mb: 2 }}
                  >
                    Pourquoi nous rejoindre ?
                  </Typography>
                  <Typography variant="body1">
                    Travailler chez <strong>Gigaboulet</strong>, c’est intégrer
                    une équipe innovante qui valorise vos compétences et vous aide
                    à évoluer. Faites le premier pas vers une carrière enrichissante.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Section Formulaire */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 3 }}
          >
            Postuler pour rejoindre notre équipe - Envoyez votre candidature !
          </Typography>
          <Box
            sx={{
              backgroundColor: '#f9fdfd',
              p: 4,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 128, 128, 0.1)',
              mx: 'auto',
              maxWidth: 600,
            }}
          >
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nom"
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Prénom"
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Téléphone"
                    variant="outlined"
                    color="primary"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message de motivation"
                    variant="outlined"
                    color="primary"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'teal',
                      '&:hover': { backgroundColor: '#006d6d' },
                    }}
                  >
                    Soumettre ma candidature
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container >
    </>
  );
}
