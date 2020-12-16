<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ClientsRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\Entity(repositoryClass=ClientsRepository::class)
 * @UniqueEntity("email",message="Un utilisateur possede déja cet email")
 * @ApiResource(
 *      normalizationContext = {"groups"={"clients_read"}},
 *      denormalizationContext = {"disable_type_enforcement"=true}
 * )
 */
class Clients implements UserInterface
{
 
     /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"clients_read","commande_read"})
     */
    
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"clients_read","commande_read"})
     * @Assert\NotBlank(
     *              message="Le champs email est obligatoire"
     * )
     * @Assert\Email( 
     *              message = "L'email entré n'est pas valide"
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups({"clients_read"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(
     *              message = "Le password ne doit pas être nul"
     * )
     * @Assert\Length(
     *              min = 5,
     *              minMessage = "Le password doit contenir au moins 5 caractères")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"clients_read","commande_read"})
     * @Assert\NotBlank(
     *              message="Le prénom est obligatoire"
     * )
     * @Assert\Length(
     *              min = 3,
     *              minMessage = "Le prénom doit contenir au moins 3 caractères"
     *  )
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"clients_read","commande_read"})
     * @Assert\NotBlank(
     *              message="Le nom est obligatoire"
     * )
     * @Assert\Length(
     *              min = 3,
     *              minMessage = "Le nom doit contenir au moins 3 caractères"
     *  )
     */
    private $nom;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"clients_read"})
     * @Assert\NotBlank(
     *              message="La date de naissance est obligatoire"
     * )
     * @Assert\Type(
     *          type="DateTime",
     *          message = "le champs doit être au format YYYY-MM-DD"
     * )
     */
    private $dateDeNaissance;

    /**
     * @ORM\Column(type="float")
     * @Groups({"clients_read"})
     * @Assert\NotBlank(
     *              message="Le numéro de rue est obligatoire"
     * )
     * @Assert\Type(
     *          type="numeric",
     *          message = "le champs doit être un nombre."
     * )
     */
    private $numeroRue;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"clients_read"})
     * @Assert\NotBlank(
     *              message="Le nom de la rue est obligatoire"
     * )
     */
    private $nomRue;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"clients_read"})
     * @Assert\NotBlank(
     *              message="Le nom de la ville est obligatoire"
     * )
     */
    private $ville;

    /**
     * @ORM\Column(type="float")
     * @Groups({"clients_read"})
     * @Assert\Type(
     *     type="numeric",
     *     message="le code postal doit être un nombre."
     * )
     * @Assert\NotBlank(
     *              message="Le code postal doit être spécifié"
     * )
     */
    private $codePostal;

    /**
     * @ORM\OneToMany(targetEntity=Commande::class, mappedBy="client")
     * @Groups({"clients_read"})
     * @ApiSubresource
     */
    private $commandes;

    public function __construct()
    {
        $this->commandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDateDeNaissance(): ?\DateTimeInterface
    {
        return $this->dateDeNaissance;
    }

    public function setDateDeNaissance($dateDeNaissance): self
    {
        $this->dateDeNaissance = $dateDeNaissance;

        return $this;
    }

    public function getNumeroRue(): ?float
    {
        return $this->numeroRue;
    }

    public function setNumeroRue($numeroRue): self
    {
        $this->numeroRue = $numeroRue;

        return $this;
    }

    public function getNomRue(): ?string
    {
        return $this->nomRue;
    }

    public function setNomRue(string $nomRue): self
    {
        $this->nomRue = $nomRue;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getCodePostal(): ?float
    {
        return $this->codePostal;
    }

    public function setCodePostal($codePostal): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    /**
     * @return Collection|Commande[]
     */
    public function getCommandes(): Collection
    {
        return $this->commandes;
    }

    public function addCommande(Commande $commande): self
    {
        if (!$this->commandes->contains($commande)) {
            $this->commandes[] = $commande;
            $commande->setClient($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            // set the owning side to null (unless already changed)
            if ($commande->getClient() === $this) {
                $commande->setClient(null);
            }
        }

        return $this;
    }
}
