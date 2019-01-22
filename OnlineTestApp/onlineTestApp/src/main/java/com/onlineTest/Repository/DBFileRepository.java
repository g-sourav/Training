package com.onlineTest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onlineTest.Entity.DBFile;

public interface DBFileRepository extends JpaRepository<DBFile, String> {
	DBFile findByFileName(String name);
}