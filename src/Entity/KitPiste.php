<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=KitPisteRepository::class)
 * @ApiResource(
 *  normalizationContext={
 *      "groups"={"KitPiste_read"}
 *  }
 * )
 */
class KitPiste
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"KitPiste_read","commande_read","commandes_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir un modèle de cadre"
     * )
     */
    private $modele;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir une couleur"
     * )
     */
    private $couleur;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir une taille pour votre cadre"
     * )
     */
    private $taille;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir un blocage"
     * )
     */
    private $blocage;

     /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir un boitier de pedalier"
     * )
     */
    private $boitier;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitPiste_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir une finition pour votre cadre"
     * )
     */
    private $finition;

    /**
     * @ORM\Column(type="float")
     * @Groups({"KitPiste_read","commande_read","commandes_subresource"})
     */
    private $prix;

    /**
     * @ORM\ManyToOne(targetEntity=Commande::class, inversedBy="kitRoutes")
     * @Groups({"KitPiste_read"})
     */
    private $commande;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModele(): ?string
    {
        return $this->modele;
    }

    public function setModele(string $modele): self
    {
        $this->modele = $modele;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getTaille(): ?string
    {
        return $this->taille;
    }

    public function setTaille(string $taille): self
    {
        $this->taille = $taille;

        return $this;
    }

    public function getBlocage(): ?string
    {
        return $this->blocage;
    }

    public function setBlocage(string $blocage): self
    {
        $this->blocage = $blocage;

        return $this;
    }

    public function getBoitier(): ?string
    {
        return $this->boitier;
    }

    public function setBoitier(string $boitier): self
    {
        $this->boitier = $boitier;

        return $this;
    }

    public function getFinition(): ?string
    {
        return $this->finition;
    }

    public function setFinition(string $finition): self
    {
        $this->finition = $finition;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getCommande(): ?Commande
    {
        return $this->commande;
    }

    public function setCommande(?Commande $commande): self
    {
        $this->commande = $commande;

        return $this;
    }
}


