<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Clients;
use App\Entity\Commande;
use App\Entity\KitPiste;
use App\Entity\KitRoute;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

/**
 * L'encodeur de mot de passe
 * @var UserPasswordEncoderInterface
 */

private $encoder;

public function __construct(UserPasswordEncoderInterface $encoder){
    
    $this ->encoder = $encoder;

}

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");
        
        for($i = 1; $i <= 10; $i++)
        {
        $client = new Clients();
        $hash = $this->encoder->encodePassword($client,"password");
        $client -> setPrenom($faker->firstName)
                -> setNom($faker->lastName)
                -> setdateDeNaissance($faker->dateTimeBetween($startDate = '-50years',$endDate='-18 years'))
                -> setNumeroRue($faker->numberBetween($min=1 , $max=150))
                -> setNomRue($faker->streetName)
                -> setVille($faker->city)
                -> setCodePostal($faker->numberBetween($min = 45000 , $max = 95000))
                -> setEmail($faker->email)
                -> setPassword($hash);

                $manager->persist($client);
                $numCommande = 1;

            for($j = 1; $j <= mt_rand($min=1,$max=5); $j++)
            {
                
                $commande = new Commande;
                $commande->setMontant(0)
                        ->setDateCommande($faker->dateTimeBetween($startDate='-3 years', $endDate = 'now'))
                        ->setClient($client)
                        ->setNumCommande($numCommande);
                $numCommande++;

                $manager->persist($commande);
                $tableauPrix = array(0);
                for ($k = 0 ; $k <= mt_rand($min=0,$max=1); $k++)
                {
                    $kitRoute = new KitRoute();
                    $cadre = $faker->randomElement($array = array ('Heroa','Endura ICR'));
                    $prix = mt_rand($min=800,$max=1100);
                    // Permet de récupérer les prix de chaque kit route et de le stocker dans le tableauPrix               
                    array_push($tableauPrix,$prix);
                    $kitRoute->setPrix($prix)
                             ->setCadre($cadre)
                             ->setModele($cadre === 'Heroa' ? 'Heroa Sharp' : 'Endurace Horizon')
                             ->setCouleur($faker->colorName)
                             ->setTaille($faker->randomElement($array = array('XS','S','M','L','XL')))
                             ->setFreins($faker->randomElement($array = array('Patins','Disques')))
                             ->setBlocage($faker->randomElement($array = array('Rapide','Transversal')))
                             ->setFinition($faker->randomElement($array = array('Mat','Brilant')))
                             ->setBoitier('Press Fit')
                             ->setCommande($commande);

                    $manager->persist($kitRoute);

                    $kitPiste = new KitPiste();
                    $prixPiste = 1199;
                    // Permet de récupérer les prix de chaque kit route et de le stocker dans le tableauPrix               
                    array_push($tableauPrix,$prixPiste);
                    $kitPiste->setPrix($prixPiste)
                            ->setModele($faker->randomElement($array = array('Ring Limit','Ring Matrix','Ring Line','Ring Full')))
                            ->setCouleur($faker->colorName)
                            ->setTaille($faker->randomElement($array = array('XS','S','M','L','XL')))
                            ->setBlocage($faker->randomElement($array = array('Rapide','Transversal')))
                            ->setFinition($faker->randomElement($array = array('Mat','Brilant')))
                            ->setBoitier($faker->randomElement($array = array('BSA','BB30')))
                            ->setCommande($commande);
                             
                    $manager->persist($kitPiste);
                }
                // Permet d'ajouter le montant total des kit au montant de la commande
                $montantFacture = array_sum($tableauPrix);
                $commande->setMontant($montantFacture);
            }
        }
        
        $manager->flush($client);
        $manager->flush($commande);
        $manager->flush($kitRoute);
        $manager->flush($kitPiste);
    }
}
