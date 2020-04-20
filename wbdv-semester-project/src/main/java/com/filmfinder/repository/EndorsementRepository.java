package com.filmfinder.repository;

import com.filmfinder.model.Endorsement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EndorsementRepository extends JpaRepository<Endorsement, Endorsement.EndorsementId> {

    @Query("select count(endorsement) from Endorsement endorsement where endorsement.id.user2.id=?1")
    int numEndorsementsForUser(int userId);

    @Query("select case when count(endorsement) > 0 then true else false end from Endorsement endorsement where endorsement.id.user1.id=?1 and endorsement.id.user2.id=?2")
    boolean existsEndorsement(int user1, int user2);
}
