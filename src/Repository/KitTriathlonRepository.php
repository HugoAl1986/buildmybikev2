<?php

namespace App\Repository;

use App\Entity\KitTriathlon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitTriathlon|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitTriathlon|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitTriathlon[]    findAll()
 * @method KitTriathlon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitTriathlonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitTriathlon::class);
    }

    // /**
    //  * @return KitTriathlon[] Returns an array of KitTriathlon objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?KitTriathlon
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
