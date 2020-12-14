<?php

namespace App\Repository;

use App\Entity\KitCyclocross;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitCyclocross|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitCyclocross|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitCyclocross[]    findAll()
 * @method KitCyclocross[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitCyclocrossRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitCyclocross::class);
    }

    // /**
    //  * @return KitCyclocross[] Returns an array of KitCyclocross objects
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
    public function findOneBySomeField($value): ?KitCyclocross
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
