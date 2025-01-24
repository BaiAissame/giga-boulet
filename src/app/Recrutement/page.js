'use client'; // Directive pour indiquer qu'il s'agit d'un composant côté client
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
      {/* Section Formulaire */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 3 }}
        >
          Informations personnelles
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Nom"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Téléphone"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Message de motivation"
            variant="filled"
            multiline
            rows={4}
            sx={{ m: 1 }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
            Soumettre
          </Button>
        </form>
      </Box>

      
            <footer className="bg-gray-800 text-white py-6 text-center mt-8">
                <p>&copy; 2025 Giga Boulet. Tous droits réservés.</p>
                <p>
                    <Link href="/" className="text-teal-400 hover:underline">Accueil</Link> |&nbsp;
                    <Link href="/menu" className="text-teal-400 hover:underline">Menu</Link> |&nbsp;
                    <Link href="/Offre" className="text-teal-400 hover:underline">Offre</Link>
                </p>
            </footer>
    </Container>
  );
}
