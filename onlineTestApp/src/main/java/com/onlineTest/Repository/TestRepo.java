package com.onlineTest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineTest.Entity.Test;

public interface TestRepo extends JpaRepository<Test, Long> {

}
